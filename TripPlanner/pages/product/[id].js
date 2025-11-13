import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching product:', error);
      setLoading(false);
    }
  };

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
  };

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Loading product...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container">
        <h1>Product not found</h1>
        <Link href="/">Go back to home</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <header>
        <h1>🛍️ E-Commerce Store</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/cart">Cart</Link>
        </nav>
      </header>

      <main className="product-detail">
        <Link href="/" className="back-link">← Back to Products</Link>
        
        <div className="product-detail-content">
          <div className="product-image">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={400}
              className="product-image-main"
              sizes="(max-width: 768px) 100vw, 600px"
              priority
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          
          <div className="product-info">
            <h2>{product.name}</h2>
            <p className="price">${product.price.toFixed(2)}</p>
            <p className="description">{product.description}</p>
            
            <div className="quantity-selector">
              <label>Quantity:</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              />
            </div>
            
            <button className="add-to-cart-btn" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </main>

      <footer>
        <p>&copy; 2024 E-Commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

