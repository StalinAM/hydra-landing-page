import { ThemeProvider } from 'styled-components'
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import Technologies from './components/Technologies'
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
          <Services />
          <Technologies />
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
