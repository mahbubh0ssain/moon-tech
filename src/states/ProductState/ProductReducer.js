import { actionTypes } from "./ActionTypes";

export const initialState = {
  loading: false,
  products: [],
  error: false,
  cart: [],
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.Fetching_Start:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.Fetching_Success:
      return {
        ...state,
        loading: false,
        products: action?.payload,
        error: false,
      };
    case actionTypes.Fetching_Failure:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actionTypes.Add_To_Cart:
      return {
        ...state,
        cart: [...state?.cart, action?.payload],
      };
    default:
      return state;
  }
};
