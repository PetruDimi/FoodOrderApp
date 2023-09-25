import { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartModal, setCartModal] = useState(false);

  const showCartModal = () => {
    setCartModal(true);
  };

  const hideCartModal = () =>{
    setCartModal(false)
  }

  return (
    <CartProvider>
      {cartModal && <Cart onHideCart={hideCartModal} />}
      <Header onShowCart={showCartModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
