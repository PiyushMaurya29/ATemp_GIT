import Image from 'next/image';

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="cart-item">
      <Image
        src={item.image}
        alt={item.name}
        width={100}
        height={100}
        className="cart-item-image"
        sizes="(max-width: 768px) 80px, 100px"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p className="price">${item.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-controls">
        <div className="quantity-controls">
          <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
            -
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
            +
          </button>
        </div>
        <p className="item-total">${(item.price * item.quantity).toFixed(2)}</p>
        <button className="remove-btn" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

