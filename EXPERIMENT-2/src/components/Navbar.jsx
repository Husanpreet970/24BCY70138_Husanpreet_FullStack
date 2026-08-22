import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <h2>TechGear</h2>
      <div>
        <Link to="/products">
          All Products
        </Link>
        <Link to="/products?category=audio">
          Audio Only
        </Link>
        <Link to="/products?maxPrice=100">
          Under $100
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
