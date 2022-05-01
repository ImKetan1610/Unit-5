import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {

    const [ cart, setCart ] = useState(0)

    const handleCart = () => {
        setCart(cart+1);
    };

    return (
        <CartContext.Provider value={{cart,handleCart}}>
            {children}
        </CartContext.Provider>
    )
}


