import { ThemeProvider } from 'styled-components'

import { CartProvider } from './hooks/useCart'

import { AppRoutes } from './routes'

import GlobalStyles from './styles/global'
import { darkTheme } from './themes/darkTheme'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CartProvider>
        <AppRoutes />
        <GlobalStyles />
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
