function Cart({ cart, placeOrder }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
          <h3>Total: ₹{total}</h3>

          {/* ✅ Place Order button */}
          <button
            onClick={placeOrder}
            style={{
              padding: "8px 15px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px"
            }}
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
