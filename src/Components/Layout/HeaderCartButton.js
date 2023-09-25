import { useContext, useEffect, useState } from "react";

import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext)
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  
  const numOfCartItems = cartCtx.items.reduce((acc, curr)=>{
    return acc + curr.amount
  },0)

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

  useEffect(()=>{
    if(cartCtx.items.length === 0){
      return
    }
    setBtnIsHighlighted(true)

    const timer = setTimeout(()=>{
      setBtnIsHighlighted(false)
    }, 300)

    return ()=>{
      clearTimeout(timer)
    }
    
  }, [cartCtx.items])

  return (
    <button onClick={props.onShowCart} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
