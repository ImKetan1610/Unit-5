import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { ToggleContext } from "../../contexts/toggleContext";

export const Cart = () => {
    const { handleCart } = useContext(CartContext);
    const { theme } = useContext(ToggleContext);
    return (
        <div>
            <button 
                className={theme? "darkCart": "lightCart"}
                onClick={() => handleCart()}
            >Add to Cart</button>
        </div>
    );
};