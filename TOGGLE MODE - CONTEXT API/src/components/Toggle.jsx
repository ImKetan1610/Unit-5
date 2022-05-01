import { useContext } from "react";
import { ToggleContext } from "../contexts/toggleContext";



export const Toggle = () => { 
    const { toggleTheme } = useContext(ToggleContext);

    return (
        <div>
            <button onClick={() => toggleTheme()}>Toggle Theme</button>
        </div>
    );
};
