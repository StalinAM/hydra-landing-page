import React, { useRef, useCallback } from 'react'
import arrow from '../assets/small-arrow.svg'
import styled from 'styled-components'

const Slideshow = ({ children, controles = true }) => {
  const slideshow = useRef(null)

  const siguiente = useCallback()

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
          <Boton onClick={anterior}>
            <ArrowLeft src={arrow} alt='' />
          </Boton>
          <Boton derecho onClick={siguiente}>
            <ArrowRight src={arrow} alt='' />
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
`

const Slide = styled.li`
  min-width: 100%;
  z-index: 10;
  /* max-height: 500px; */
  position: relative;
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
`
const ArrowRight = styled.img`
  width: 25px;
  right: 0;
  transform: rotate(180deg);
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
  ${(props) => (props.derecho ? 'left: -15px' : 'right: -15px')};
  pointer-events: all;
`

export { Slideshow, Slide }
