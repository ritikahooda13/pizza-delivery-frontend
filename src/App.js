import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";

function App() {
  // ✅ States
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  // ✅ Add to Cart function
  const addToCart = (pizza) => {
    setCart((prevCart) => [...prevCart, pizza]);
  };

  // ✅ Place Order function
  const placeOrder = () => {
    if (cart.length === 0) return;
    setOrders((prevOrders) => [...prevOrders, cart]); // Save current cart as new order
    setCart([]); // Empty the cart
    alert("✅ Order placed successfully!");
  };

  return (
    <Router>
      {/* Navbar with cart count */}
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} placeOrder={placeOrder} />}
        />
        <Route path="/orders" element={<Orders orders={orders} />} />
      </Routes>
    </Router>
  );
}

export default App;
