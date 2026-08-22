import { Link, useParams } from "react-router-dom";
import PRODUCTS from "../productsData";
function ProductDetails() {
  const { productId } = useParams();
  const product = PRODUCTS.find(
    (item) => item.id === Number(productId)
  );
  if (!product) {
    return (
      <div className="container">
        <h1>Product not found!</h1>
        <Link to="/products">
          <button>
            Back to Products
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div className="container">
      <h1>{product.name}</h1>
      <div className="details-card">
        <p>
          <strong>ID:</strong> {product.id}
        </p>
        <p>
          <strong>Name:</strong> {product.name}
        </p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
      </div>
      <Link to="/products">
        <button>
          Back to Products
        </button>
      </Link>
    </div>
  );
}

export default ProductDetails;
