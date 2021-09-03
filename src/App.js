import { useEffect, useState } from "react";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import './assets/styles/global.css'
import api from './services/api'

function App() {
  const [toggleCart, setToggleCart] = useState(true)
  const [itemsCart, setItemsCart] = useState([])
  const [totalCart, setTotalCart] = useState(0)
  const queryParams = new URLSearchParams(window.location.search)
  const typeDelivery = queryParams.get('delivery')

  const handleToggleCart = () => {
    setToggleCart(!toggleCart)
  }

  useEffect(() => {
    try {
      api.get(typeDelivery).then(response => {
        setItemsCart(response.data.record.items)
        setTotalCart(response.data.record.value)
      })
    } catch (error) {
      console.log(error)
    }
  }, [typeDelivery]);


  return (
    <>
      <Navbar handleClickCartButton={() => handleToggleCart()}></Navbar>

      <Cart
        isVisible={toggleCart}
        dataItems={itemsCart}
        totalCart={totalCart}
      />
    </>
  );
}

export default App;
