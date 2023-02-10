import React, { useCallback, useRef } from 'react'
import arrow from '../assets/small-arrow.svg'
import styled from 'styled-components'

const Slideshow = ({ children, controles = true }) => {
  const slideshow = useRef(null)

  const siguiente = useCallback(() => {
    const primerElemento = slideshow.current.children[0]
    slideshow.current.appendChild(primerElemento)
  })

  const anterior = () => {
    if (slideshow.current.children.length > 0) {
      // Obtenemos el ultimo elemento del slideshow.
      const index = slideshow.current.children.length - 1
      const ultimoElemento = slideshow.current.children[index]
      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      )
    }
  }

  return (
    <>
      <ContenedorSlideshow ref={slideshow}>{children}</ContenedorSlideshow>
      {controles && (
        <Controles>
          <Boton derecho onClick={siguiente}>
            <ArrowRight src={arrow} alt='' />
          </Boton>
          <Boton onClick={anterior}>
            <ArrowLeft src={arrow} alt='' />
          </Boton>
        </Controles>
      )}
    </>
  )
}

const ContenedorSlideshow = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  max-width: min-content;
`
const Controles = styled.div`
  position: absolute;
  z-index: 20;
  width: 100%;
  pointer-events: none;
  top: 50%;
  transform: translateY(-15px);
`
const ArrowLeft = styled.img`
  width: 25px;
  transform: rotate(180deg);
`
const ArrowRight = styled.img`
  width: 25px;
  right: 0;
`
const Boton = styled.button`
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: ${(props) => props.theme.mBox};
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.mLightPurple},
    ${(props) => props.theme.lightPurple}
  );
  ${(props) => (props.derecho ? 'right: -15px' : 'left: -15px')};
  pointer-events: all;
`

export { Slideshow }
