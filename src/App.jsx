import { ThemeProvider } from 'styled-components'
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import GlobalStyles from './style/GlobalStyles'
import { darck } from './style/Theme'

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={darck}>
        <Header />
        <main>
          <Home />
          <About />
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
