import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import useScreenSize from './ScreenSize'

const Container = styled.div`
  perspective: 1100px;
`
const WrapperT = styled.div`
  transform-style: preserve-3d;
`
function Wrapper({
  children,
  coordTransform,
  restoreTransform,
  setCoordTransformS
}) {
  const { width, height } = useScreenSize()
  const [translateDiv, setTranslateDiv] = useState()

  const elementRef = useRef()
  const [halfWidth, setHalfWidth] = useState(0)
  const [halfHeight, setHalfHeight] = useState(0)
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState()
  const [times, setTimes] = useState(300)
  const sizeItem = () => {
    const { width, height, left, top } =
      elementRef.current.getBoundingClientRect()
    setHalfWidth(width / 2)
    setHalfHeight(-height / 2)
    setTop(top)
    setLeft(left)
  }
  useEffect(() => {
    sizeItem()
  }, [width, height])
  const timeTransition = () => {
    setTimeout(() => {
      setTimes(0)
    }, 300)
  }
  const restoreTimes = () => setTimes(300)
  return (
    <Container
      ref={elementRef}
      onMouseMove={(event) =>
        coordTransform(
          event,
          setCoordTransformS,
          halfWidth,
          halfHeight,
          left,
          top,
          setTranslateDiv,
          times
        )
      }
      onMouseLeave={() => {
        restoreTransform(setCoordTransformS, setTranslateDiv)
        restoreTimes()
      }}
      onMouseEnter={() => {
        sizeItem()
        timeTransition()
      }}
    >
      <WrapperT style={translateDiv}>{children}</WrapperT>
    </Container>
  )
}

export default Wrapper
