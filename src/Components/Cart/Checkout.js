import classes from "./Checkout.module.css";
import { useState, useContext, Fragment, useEffect } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal/Modal";

const defaultOrderObject = {
  orderedItem: [],
  totalPrice: 0,
  clientDetails: {},
};

const defaultClientInfo = {
  name: "",
  street: "",
  postalCode: "",
  city: "",
};

let onComponentMount = true;

const Checkout = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState("");
  const [clientInfo, setClientInfo] = useState(defaultClientInfo);
  const [orderDetails, setOrderDetails] = useState(defaultOrderObject);
  const [confirm, setConfirm] = useState(false);

  const cart = useContext(CartContext);
  console.log(cart);

  useEffect(() => {
    if (onComponentMount) {
      onComponentMount = false;
      return;
    }
    const postRequest = async (orderInfo) => {
      const response = await fetch(
        "https://react-http-requests-b1189-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
        {
          method: "POST",
          body: JSON.stringify(orderInfo),
        }
      );
      if (!response.ok) {
        throw new Error("Unfortunately we could not submit your order.");
      }
      setIsLoading(false);
    };
    postRequest(orderDetails).catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });

    setClientInfo(defaultClientInfo)
    setOrderDetails(defaultOrderObject)
  }, [orderDetails]);

  const confirmSubmitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setOrderDetails({
      orderedItems: cart.items,
      totalPrice: cart.totalAmount,
      clientInfo,
    });

    setConfirm(true);
  };

  const refreshPageHandler = () =>{
    window.location.reload(false);
  }

  if (isLoading) {
    return <p className={classes.loading}>Loading...</p>;
  }


  if (httpError) {
    return (
      <Fragment>
        <p className={classes.error}>{httpError}</p>
        <button className={classes.refreshBtn} onClick={refreshPageHandler}>Click to refresh</button>
      </Fragment>
    );
  }

  const nameHandler = (e) => {
    setClientInfo((prevState) => {
      return { ...prevState, name: e.target.value };
    });
  };

  const streetHandler = (e) => {
    setClientInfo((prevState) => {
      return { ...prevState, street: e.target.value };
    });
  };

  const postalHandler = (e) => {
    setClientInfo((prevState) => {
      return { ...prevState, postalCode: e.target.value };
    });
  };

  const cityHandler = (e) => {
    setClientInfo((prevState) => {
      return { ...prevState, city: e.target.value };
    });
  };

  const okHandler = () => {
    setConfirm(false);
    cart.emptyCart();
    props.onCancel();
  };

  console.log(clientInfo);

  return (
    <Fragment>
      {confirm ? (
        <Modal>
          <h3>Your Order was placed successfully!</h3>
          <button onClick={okHandler} className={classes.okayBtn} type="button">
            Okay
          </button>
        </Modal>
      ) : (
        <form className={classes.form} onSubmit={confirmSubmitHandler}>
          <h2>Total Amount: {props.amount}</h2>

          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input onChange={nameHandler} type="text" id="name" />
          </div>
          <div className={classes.control}>
            <label htmlFor="street">Street</label>
            <input onChange={streetHandler} type="text" id="street" />
          </div>
          <div className={classes.control}>
            <label htmlFor="postal">Postal Code</label>
            <input onChange={postalHandler} type="text" id="postal" />
          </div>
          <div className={classes.control}>
            <label htmlFor="city">City</label>
            <input onChange={cityHandler} type="text" id="city" />
          </div>
          <div className={classes.actions}>
            <button type="button" onClick={props.onCancel}>
              Cancel
            </button>
            <button type="submit" className={classes.submit}>
              Confirm
            </button>
          </div>
        </form>
      )}
    </Fragment>
  );
};

export default Checkout;
