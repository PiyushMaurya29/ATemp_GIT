import { useState, useEffect } from 'react';
import Link from 'next/link';
import CartItem from '../components/CartItem';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const removeFromCart = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCartItems([]);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
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

      <main className="cart-page">
        <h2>Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <Link href="/" className="btn-primary">Continue Shopping</Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Total:</span>
                <span className="total-price">${calculateTotal().toFixed(2)}</span>
              </div>
              <button className="btn-primary" onClick={clearCart}>
                Clear Cart
              </button>
              <button className="btn-primary checkout-btn">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </main>

      <footer>
        <p>&copy; 2024 E-Commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

