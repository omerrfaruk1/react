import { combineReducers } from "redux";
import changeCategoryReducers from "./changeCategoryReducers"
import categoryListReducer from "./categoryListReducer"
import productListReducer from "./productListReducer"
import cartReducer from "./cartReducer"
import saveProductReducer from "./saveProductReducer"
const rootReducer = combineReducers({
    changeCategoryReducers,
    categoryListReducer,
    productListReducer,
    saveProductReducer,
    cartReducer,
})

export default rootReducer;