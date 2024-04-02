import React, {createContext} from "react";
import all_product from "../assets/products/all_products";

export const ProductContext = createContext(null);

const ProductContextProvider = (props) => {
    const contextValue = {all_product};

    return (
        <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;