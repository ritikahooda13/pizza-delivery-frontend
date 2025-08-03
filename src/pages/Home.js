import { pizzas } from "../data";

function Home({ addToCart }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      padding: "20px"
    }}>
      {pizzas.map((pizza) => (
        <div key={pizza.id} style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "10px",
          textAlign: "center",
          width: "200px"
        }}>
          <img src={pizza.image} alt={pizza.name} style={{ width: "100%", borderRadius: "10px" }} />
          <h3>{pizza.name}</h3>
          <p>₹{pizza.price}</p>
          <button
            style={{
              padding: "5px 10px",
              backgroundColor: "orange",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
            onClick={() => addToCart(pizza)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
