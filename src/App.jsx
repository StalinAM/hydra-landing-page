import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import GlobalStyles from './style/GlobalStyles'
import { darck } from './style/Theme'

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={darck}>
        <Header />
      </ThemeProvider>
    </>
  )
}

export default App
