import React from 'react'

import { ThemeScheme } from '../styles/themes/theme'

export const ThemeContext = React.createContext(null);
export const useTheme = () => React.useContext(ThemeContext)

export const ThemeContextProvider: React.FC<{
    setTheme: (value: ThemeScheme) => any;
}> = ({
    children
}) => {
    // TO DO
    return (
        <ThemeContext.Provider value={null}>
            { children }
        </ThemeContext.Provider>
    )
}