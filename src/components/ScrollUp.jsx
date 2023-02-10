import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
const Scroll = styled.a`
  position: fixed;
  right: 2.5rem;
  bottom: ${(props) => (props.show ? '4rem' : '-20%')};
  padding: 0.3rem;
  border-radius: 0.4rem;
  z-index: 10;
  border: 2px solid ${(props) => props.theme.lightPurple};
  transition: 0.4s;
  &:hover {
    background-color: ${(props) => props.theme.xLightPurple};
  }
  svg {
    transform: rotate(-90deg);
  }
  @media screen and (max-width: 1080px) {
    right: 1.5rem;
    padding: 0.2rem;
  }
  @media screen and (max-width: 480px) {
    right: 1rem;
  }
`
function ScrollUp() {
  const [show, setShow] = useState(false)
  //   the scroll is displayed when passing 50 vw
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setShow(true) : setShow(false)
    })
  }, [])

  return (
    <Scroll href='#' aria-label='Return to home' show={show}>
      <svg
        width='30'
        height='25'
        viewBox='0 0 54 38'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M43.8333 19L2.16666 19M43.8333 19L27.1667 35.6667M43.8333 19L27.1667 2.33333'
          stroke='#C0B7E8'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </Scroll>
  )
}

export default ScrollUp
