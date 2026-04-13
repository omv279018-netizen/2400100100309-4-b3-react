import { useCart } from "../context/CartContext";

export default function BookCard({ book }) {
  const { addToCart } = useCart();
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <span>${book.price}</span>
      <button onClick={() => addToCart(book)}>Add to Cart</button>
    </div>
  );
}