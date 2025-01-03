import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [productName, setProductName] = useState('');
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    fetch('/products.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          // Filter products by name
          const foundProducts = data.filter(
            (product) => product.name.toLowerCase() === productName.toLowerCase()
          );
          if (foundProducts.length > 0) {
            setProducts(foundProducts);
            setError(null);
          } else {
            setError('No products found!');
            setProducts([]);
          }
        } else {
          setError('Error loading product data.');
        }
      })
      .catch((error) => {
        setError('Failed to load product data.');
      });
  };

  return (
    <div className="home-container">
    <nav className="navbar">
  <Link to="/" className="nav-link">Home</Link>
  
</nav>
      <h1 className="heading">Search for a Product</h1>
      <div className="search-bar">
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Enter product name"
          className="input-field"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}
      {products.length > 0 ? (
        <div className="product-list">
          <h2 className="product-heading">Products Found:</h2>
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3 className="product-name">{product.name}</h3>
              <p className="store">Store: {product.store}</p>
              <p className="price">Price: ${product.price}</p>
              <p className="description">{product.description}</p>
              <p>
                <a href={product.url} target="_blank" rel="noopener noreferrer" className="view-product-link">
                  View Product
                </a>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-products-message">No products found.</p>
      )}
    </div>
  );
};

export default Home;

