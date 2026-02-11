import React, { useState } from "react";
import { X, Plus, Minus } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/cartsystem";

const CartCard = ({ cartData, onQuantityChange }) => {
  const [countproduct, setCountProduct] = useState(cartData.quantity);
  const dispatch = useDispatch();

  const decrimentProduct = () => {
    if (countproduct <= 0) {
      setCountProduct(0);
    } else {
      setCountProduct(countproduct - 1);
      onQuantityChange(cartData.id, countproduct - 1); 
    }
  };

  const incrementProduct = () => {
    setCountProduct(countproduct + 1);
    onQuantityChange(cartData.id, countproduct + 1);
  };

  const totalPrice = cartData.price * countproduct;
  const truncatedItemName =
  cartData?.name.length > 10
    ? cartData?.name.substring(0, 13) + "..."
    : cartData?.name;

  return (
    <>
      <div className="row my-2 CartCardRow">
        <div className="CartCardSection1">
          <div className="CartCartImg">
            <img src={cartData?.productImage} alt="" />
          </div>
        </div>
        <div className="CartCardSection2">
          <div className="cartDescription">
            <p className="cart-card-name">{truncatedItemName}</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <div className="CounterImgs">
            <div className="cart-card-btn">
              <Minus onClick={decrimentProduct} color="white" />
            </div>
            <p className="m-0 mx-2 ">{countproduct}</p>
            <div className="cart-card-btn">
              <Plus onClick={incrementProduct} color="white" />
            </div>
          </div>
        </div>
        <div className="CartCardSection3">
          <p className="fs-1" style={{ cursor: "pointer" }}>
            <X onClick={() => dispatch(removeFromCart({ id: cartData.id }))} />
          </p>
        </div>
      </div>
    </>
  );
};

export default CartCard;
