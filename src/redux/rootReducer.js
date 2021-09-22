import { combineReducers } from "redux";

import * as User from "./reducer/user/user";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
 
export const rootReducer = combineReducers({
 
  token: User.user,
   
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};

export default persistReducer(persistConfig, rootReducer);

export function* rootSaga() {}
