function Orders({ orders }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>📦 Your Orders</h2>

      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <strong>Order {index + 1}:</strong>
              <ul>
                {order.map((item, i) => (
                  <li key={i}>{item.name} - ₹{item.price}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Orders;
