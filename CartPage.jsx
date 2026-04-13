import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart, totalPrice } = useCart();
  if (cart.length === 0) return <p>Your cart is empty. <Link to="/shop">Shop now</Link></p>;

  return (
    <div>
      {cart.map(item => (
        <div key={item.id}>
          <span>{item.title} x{item.qty}</span>
          <span>${(item.price * item.qty).toFixed(2)}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <Link to="/checkout"><button>Proceed to Checkout</button></Link>
    </div>
  );
}