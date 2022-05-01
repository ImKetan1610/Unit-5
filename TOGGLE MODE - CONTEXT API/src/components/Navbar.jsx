import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import { ToggleContext } from "../contexts/toggleContext";


export  const Nav =() => {
    const { cart } = useContext(CartContext);
    const { theme } = useContext(ToggleContext)

    return (
        <div>
            <nav className={ theme? "darkNavbar" : "lightNavbar" }>
                Cart = { cart }
            </nav>
        </div>
    )
}