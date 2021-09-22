import { types } from "../../actionMethodes/types";

 

export const user = (state = null, action) => {
  if (action.type === types.LOGIN ) {
    return action.payload;
  }
  if (action.type == types.LOGOUT) {
    return null;
  }
  return state;
};
 