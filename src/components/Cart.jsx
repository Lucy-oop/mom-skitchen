import React, { useState } from "react";
import "./Cart.css";
import Nav from "./Nav";
import { getCart, updateQty, removeItem, clearCart, calculateTotal } from "./utils/cart";

function Cart() {
  const [cart, setCart] = useState(() => getCart());


  const totals = calculateTotal(cart, 1500);

  const inc = (id) => setCart(updateQty(id, (cart.find(i => i.id === id)?.qty || 1) + 1));
  const dec = (id) => setCart(updateQty(id, Math.max(1, (cart.find(i => i.id === id)?.qty || 1) - 1)));

  const remove = (id) => setCart(removeItem(id));
  const clear = () => { clearCart(); setCart([]); };

  return (
    <div className="cart-page">
      <Nav />

      <div className="cart-wrap">
        {/* Left side */}
        <div className="cart-left">
          <div className="cart-head">
            <h2>Your Cart</h2>
            {cart.length > 0 && (
              <button className="cart-clear" onClick={clear}>
                Clear Cart
              </button>
            )}
          </div>

          <div className="cart-note">
            🚚 <b>Delivery Fee:</b> 1,500 kyat (All Mandalay)
          </div>

          <div className="cart-note cart-note-green">
            ⏰ Order before <b>11:30 AM</b> for same-day delivery <br />
            ❌ Closed every Sunday
          </div>

          {/* Items */}
          {cart.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty.</p>
              <p className="muted">Go to Menu and add some lunch boxes 🍱</p>
            </div>
          ) : (
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img className="cart-thumb" src={item.image} alt={item.name} />

                  <div className="cart-mid">
                    <p className="cart-name">{item.name}</p>
                    <p className="cart-price">{item.price.toLocaleString()} Ks</p>
                  </div>

                  <div className="cart-actions">
                    <div className="qty">
                      <button className="qty-btn" onClick={() => dec(item.id)}>-</button>
                      <span className="qty-num">{item.qty}</span>
                      <button className="qty-btn" onClick={() => inc(item.id)}>+</button>
                    </div>

                    <div className="cart-line-total">
                      {(item.price * item.qty).toLocaleString()} Ks
                    </div>

                    <button className="remove-btn" onClick={() => remove(item.id)} aria-label="Remove">
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right side */}
        <div className="cart-right">
          <div className="summary-card">
            <h3>Summary</h3>

            <div className="sum-row">
              <span>Subtotal</span>
              <span>{totals.subtotal.toLocaleString()} Ks</span>
            </div>

            <div className="sum-row">
              <span>Delivery</span>
              <span>{totals.delivery.toLocaleString()} Ks</span>
            </div>

            <div className="sum-divider" />

            <div className="sum-row total">
              <span>Total</span>
              <span>{totals.total.toLocaleString()} Ks</span>
            </div>
          </div>

          <div className="form-card">
            <h3>Delivery Details</h3>

            <div className="form-grid">
              <input type="text" placeholder="Your Name" />
              <input type="tel" placeholder="Phone Number" />
              <textarea className="full" placeholder="Delivery Address" />
              <input type="date" />
              <input type="time" />
              <textarea className="full" placeholder="Notes (no spicy, allergies, etc.)" />
            </div>

            <a
              className={`place-order ${cart.length === 0 ? "disabled" : ""}`}
              href={cart.length ? "https://wa.me/959778003165" : undefined}
              onClick={(e) => cart.length === 0 && e.preventDefault()}
            >
              Place Order via WhatsApp
            </a>

            <p className="form-hint">
              Tip: WhatsApp link opens chat. You can later send order summary automatically.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;


