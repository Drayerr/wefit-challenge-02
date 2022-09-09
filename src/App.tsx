import { ThemeProvider } from 'styled-components'
import { MainLayout } from './layouts/MainLayout'

import GlobalStyles from './styles/global'
import { darkTheme } from './themes/darkTheme'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <MainLayout />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
