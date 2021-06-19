import React from 'react'

import { ThemeProvider } from 'styled-components'
import { GlobalStyled } from './styles/global'
import { ThemeContextProvider } from './hooks/theme'
import { ThemeScheme } from './styles/themes/theme'
import { DarkTheme } from './styles/themes/dark'

export const App: React.FC = () => {
    const [theme, setTheme] = React.useState<ThemeScheme>(DarkTheme)

    return (
        <ThemeProvider theme={ theme }>
            <ThemeContextProvider setTheme={ setTheme }>
                Hello World
            </ThemeContextProvider>
            <GlobalStyled />
        </ThemeProvider>
    )
}
