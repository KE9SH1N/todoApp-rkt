"use client";
import { Product } from "../../../interfaces";
import React from "react";
import {
  decrement,
  increment,
  productQtyInCartSelector,
} from "../features/cartSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../store/store";
// import { Button } from "./elements";
// import QtyBtn from "./QtyBtn";

interface Props {
  product: Product;
}

const AddToCartBtn = (props: Props) => {
  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, props.product.id)
  );
  const dispatch = useAppDispatch();
    return (
      <div className="flex justify-center">
        <button className="bg-teal-400 p-5 py-3 rounded"
          onClick={() => dispatch(increment(props.product))}
        >
          Add To Cart
        </button>
      </div>
    );
//   return (
//     <QtyBtn
//       onDecrease={() => dispatch(decrement(props.product))}
//       onIncrease={() => dispatch(increment(props.product))}
//       qty={qty}
//     />
//   );
};

export default AddToCartBtn;
