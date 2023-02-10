import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import About from './components/About'
import BuildHydra from './components/BuildHydra'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import ScrollUp from './components/ScrollUp'
import Services from './components/Services'
import Technologies from './components/Technologies'
import GlobalStyles from './style/GlobalStyles'
import { darck } from './style/Theme'

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <GlobalStyles toggle={toggle} />
      <ThemeProvider theme={darck}>
        <Header toggle={toggle} setToggle={setToggle} />
        <main>
          <Home />
          <About />
          <Services />
          <Technologies />
          <BuildHydra />
          <Contact />
        </main>
        <Footer />
        <ScrollUp />
      </ThemeProvider>
    </>
  )
}

export default App
