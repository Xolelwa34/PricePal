import React, { useEffect, useState } from 'react';

const Compare = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    // Fetch products from your API
    fetch('/api/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false); 
      })
      .catch((error) => {
        setError(error.message); 
        setLoading(false); 
        console.error('Error fetching products:', error);
      });
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>; 
  }

  return (
    <div className="mt-6">
      <h2 className="text-2xl">Price Comparison</h2>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="mt-4">
            <h3 className="text-xl">{product.name}</h3>
            <p>{product.description}</p>
            <div>
              <p>
                {product.store}: R{product.price}{' '}
                <a href={product.url} target="_blank" rel="noopener noreferrer">
                  Link
                </a>
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Compare;

