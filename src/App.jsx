import { ThemeProvider } from 'styled-components'
import Button from './components/Button'
import GlobalStyles from './style/GlobalStyles'
import { darck } from './style/Theme'

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={darck}>
        <Button />
      </ThemeProvider>
    </>
  )
}

export default App
