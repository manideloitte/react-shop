import React, { useState } from "react";

const ThemeContext = React.createContext({});

export const ThemeContextProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('dark')
    const [cartData, setCartData] = useState({
        lastUpdated: new Date().getTime()
    })

    return <ThemeContext.Provider value={{
        currentTheme,
        setCurrentTheme,
        cartData,
        setCartData
    }}>
        {children}
    </ThemeContext.Provider>
};

export default ThemeContext;