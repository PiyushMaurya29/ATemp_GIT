import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`} className="product-card">
      <div className="product-card-image">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className="product-card-img"
          sizes="(max-width: 768px) 100vw, 300px"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="product-card-info">
        <h3>{product.name}</h3>
        <p className="price">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}

