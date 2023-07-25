import { configureStore } from "@reduxjs/toolkit";
import  productsSlice  from "./products/ProductsSlice";
import NumOfProductsSlice from './numProducts.js/NumProducts'
import ShopSlice from "./shop/ShopSlice";
const store = configureStore({
    reducer:{
        user: productsSlice,
        numPrd: NumOfProductsSlice,
        shop: ShopSlice,
    }
    // middleware: (getDefaultMidlle) => getDefaultMidlle.concat(logger)
})
export default store