import { useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchProducts = async () => {
    const res = await axios.get(`/api/products?query=${query}`);
    setResults(res.data);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">PricePal</h1>
      <input
        type="text"
        className="border p-2"
        placeholder="Search for a product..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2" onClick={searchProducts}>
        Search
      </button>
      <div>
        {results.map((product) => (
          <div key={product._id} className="border p-2">
            <p>{product.name}</p>
            <p>{product.store}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

