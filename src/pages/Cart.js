import React from "react";
import ProductCard from "../components/ProductCard";
import { useProduct } from "../context/ProductProvider";

const Cart = () => {
  const {
    state: { cart, loading, error },
  } = useProduct();

  let content;

  if (loading) {
    content = <div>Loading...</div>;
  }

  if (error) {
    content = <div>Something went wrong...</div>;
  }

  if (!loading && !error && cart?.length === 0) {
    content = <div>Nothing to show.</div>;
  }

  if (!loading && !error && cart?.length) {
    content = cart?.map((product, i) => (
      <ProductCard key={i} product={product} />
    ));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default Cart;
