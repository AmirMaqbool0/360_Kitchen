import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./style.css";
import { Minus, Plus, X } from "lucide-react";
import { Addcart } from "../../redux/cartsystem";
const ProductModel = ({ modelData }) => {
  const [countProduct, setCountProduct] = useState(1);
  const [item, setitem] = useState(modelData);
  const [prefrence, setPrefrence] = useState("");
  useEffect(() => {
    setitem(modelData);
  }, [modelData?.name]);
  const decrimentProduct = () => {
    if (countProduct <= 0) {
      setCountProduct(0);
    } else {
      setCountProduct(countProduct - 1);
    }
  };
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      Addcart({ ...modelData, quantity: countProduct, prefrence: prefrence })
    );
  };
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <button type="button" className="btn-close" data-bs-dismiss="modal">
            <X />
          </button>
          {/* <!-- Modal body --> */}
          <div className="modal-body m-0 p-0">
            <div className="row">
              <img src={item?.productImage} className="ModalImg" alt="" />
            </div>
            <div className="row ModalDescription">
              <p>{item?.name}</p>
              <p>
               {item?.description}
              </p>
              <p>CA${item?.price}</p>
              {/* <span>Special Instructions</span>
              <p style={{ fontSize: "13px" }}>
                Any Specific Prefrence? Let Us Know
              </p> */}
              {/* <div>
                <textarea
                  rows={4}
                  cols={50}
                  className="ModalInput"
                  placeholder="eg : No extra spices"
                  value={prefrence}
                  onChange={(e) => setPrefrence(e.target.value)}
                /> 
              </div> */}
            </div>
          </div>
          {/* <div className="modal-footer">
            <div className="counterBtns">
              <div className="CardFooteBtn">
                <Minus color="white" onClick={decrimentProduct} size={24} />
              </div>
              <p>{countProduct}</p>
              <div className="CardFooteBtn">
                <Plus
                  color="white"
                  onClick={() => setCountProduct(countProduct + 1)}
                  size={24}
                />
              </div>
            </div>
            <button
              className=" card-btn"
              onClick={addToCart}
              data-bs-dismiss="modal"
            >
             Add to Cart
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductModel;
