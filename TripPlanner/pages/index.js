import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>🛍️ E-Commerce Store</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/cart">Cart</Link>
        </nav>
      </header>

      <main>
        <h2>Featured Products</h2>
        
        {loading ? (
          <div className="loading">Loading products...</div>
        ) : (
          <div className="products-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <footer>
        <p>&copy; 2024 E-Commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

