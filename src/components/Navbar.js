import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav style={{
      backgroundColor: 'orange',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1 style={{ margin: 0 }}>🍕 Pizza Delivery</h1>
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '20px',
        margin: 0,
        padding: 0
      }}>
        <li><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>
        <li><Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>Cart ({cartCount})</Link></li>
        <li><Link to="/orders" style={{ textDecoration: 'none', color: 'black' }}>Orders</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
