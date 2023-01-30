import React, { createContext, useContext, useEffect, useReducer } from "react";
import { actionTypes } from "../states/ProductState/ActionTypes";
import {
  initialState,
  productReducer,
} from "../states/ProductState/ProductReducer";
export const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    dispatch({ type: actionTypes.Fetching_Start });
    fetch("products.json")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: actionTypes.Fetching_Success, payload: data })
      )
      .catch(() => dispatch({ type: actionTypes.Fetching_Failure }));
  }, []);

  const value = {
    state,
    dispatch,
  };

  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export default ProductProvider;

export const useProduct = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
};
