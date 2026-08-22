import { Link, useSearchParams } from "react-router-dom";
import PRODUCTS from "../productsData";
function ProductCatalog() {
  const [searchParams, setSearchParams] =
    useSearchParams();
  const category =
    searchParams.get("category") || "";
  const maxPrice =
    searchParams.get("maxPrice") || "";
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      category === "" ||
      product.category === category;
    const matchesPrice =
      maxPrice === "" ||
      product.price <= Number(maxPrice);
    return matchesCategory && matchesPrice;
  });
  const handleCategoryChange = (event) => {
    const value = event.target.value;
    const newParams =
      new URLSearchParams(searchParams);
    if (value) {
      newParams.set("category", value);
    } else {
      newParams.delete("category");
    }
    setSearchParams(newParams);
  };
  const handlePriceChange = (event) => {
    const value = event.target.value;
    const newParams =
      new URLSearchParams(searchParams);
    if (value) {
      newParams.set("maxPrice", value);
    } else {
      newParams.delete("maxPrice");
    }
    setSearchParams(newParams);
  };
  const clearFilters = () => {
    setSearchParams({});
  };
  return (
    <div className="container">
      <h1>TechGear Product Catalog</h1>
      <div className="filters">
        <div>
          <label>Category: </label>
          <select
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">
              All Categories
            </option>
            <option value="audio">
              Audio
            </option>
            <option value="peripherals">
              Peripherals
            </option>
            <option value="display">
              Display
            </option>
          </select>
        </div>
        <div>
          <label>Maximum Price: </label>
          <input
            type="number"
            value={maxPrice}
            onChange={handlePriceChange}
            placeholder="Enter max price"
          />
        </div>
        <button onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              className="product-card"
              key={product.id}
            >
              <h3>
                <Link
                  to={`/product/${product.id}`}
                >
                  {product.name}
                </Link>
              </h3>
              <p>
                Price: ${product.price}
              </p>
              <p>
                Category: {product.category}
              </p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductCatalog;
