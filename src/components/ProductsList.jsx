import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
const ProductsList = () => {
  const productStore = useSelector((store) => store.products);

  return (
    <div className="mx-auto">
      <div className="row">
        {productStore.length > 0 &&
          productStore.map((product) => <Product product={product} />)}
      </div>
    </div>
  );
};

export default ProductsList;
