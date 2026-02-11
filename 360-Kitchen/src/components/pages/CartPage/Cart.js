import React, { useState, useEffect } from "react";
import "./Cart.css";
import CartCard from "./CartCard";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.card;
  const deliveryCharges = 10; 
  const taxes = 23; 
  const [grandTotal, setGrandTotal] = useState(0);

  // Recalculate  total whenever cart items change
  useEffect(() => {
    const total = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setGrandTotal(total + deliveryCharges + taxes);
  }, [cartItems, deliveryCharges, taxes]);

  // Handle quantity change
  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setGrandTotal(
      updatedCartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0) + deliveryCharges + taxes
    );
  };

  return (
    <>
      <div className="container my-5">
        <div className="row ">
          <p className="CartHeadingText">Your Cart</p>
          <div className="CartHeadinItems">
            <p>Continue Shipping Item</p>
            <p>{cartItems.length}</p>
          </div>
        </div>

        {/* Cart Card */}
        {cartItems.map((item, i) => (
          <div key={i}>
            <CartCard cartData={item} onQuantityChange={handleQuantityChange} />
            <div className="prefrence-text">
              <span>Preference:</span>
              <p>{item?.prefrence}</p>
            </div>
          </div>
        ))}

        {/* Cart Footer */}
        <div className="cart-footer-container">
          <div className="row cartFooter">
            <div style={{ width: "50%" }}>
              <p>Delivery Charges</p>
              <p>Taxes</p>
              <p>Grand Total</p>
            </div>
            <div className="text-end" style={{ width: "50%" }}>
              <p>${deliveryCharges}</p>
              <p>${taxes}</p>
              <p>${grandTotal.toFixed(2)}</p>
            </div>
            <div className="d-flex justify-content-center">
              <button className="button-main py-2 px-5">Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
