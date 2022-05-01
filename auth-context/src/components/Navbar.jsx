import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"


export const Nav = () => {
    const { isAuth, toggleAuth }= useContext(AuthContext)
    return(
        <nav>
            <li>
                <button onClick={toggleAuth}>
                    {isAuth ? "Log Out" : "Log In"}
                </button>
            </li>
        </nav>
    )
}