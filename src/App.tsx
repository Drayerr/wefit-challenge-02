import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './routes'

import GlobalStyles from './styles/global'
import { darkTheme } from './themes/darkTheme'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppRoutes />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
