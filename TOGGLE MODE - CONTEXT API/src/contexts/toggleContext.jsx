import { createContext, useState } from "react";


export const ToggleContext = createContext();

export const ToggleContextProvider = ({children}) => {
    const [ theme, setTheme ] = useState(false);

    const toggleTheme = () => {
        setTheme(!theme);
    };

    return (
        <ToggleContext.Provider value = {{ theme, toggleTheme }}>
            {children}
        </ToggleContext.Provider>
     )
}