import React from "react";

const ThemeContext = React.createContext({
    currentTheme: 'dark',
    changeTheme: (value) => {

    }
  });

// const ThemeContext = () => {
//     return React.createContext({
//         currentTheme: 'dark',
//         changeTheme: (value) => {
    
//         }
//       });
// }


export const ThemeContextProvider = ({ children }) => {
    return <ThemeContext.Provider value={{}}>
        {children}
    </ThemeContext.Provider>
};

export default ThemeContext;