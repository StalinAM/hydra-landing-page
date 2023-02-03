import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import useScreenSize from './ScreenSize'

const Container = styled.div`
  perspective: 1200px;
`
function Wrapper({
  children,
  coordTransform,
  restoreTransform,
  setCoordTransformS
}) {
  const { width, height } = useScreenSize()
  const elementRef = useRef()

  const [halfWidth, setHalfWidth] = useState(0)
  const [halfHeight, setHalfHeight] = useState(0)
  const sizeItem = () => {
    const { width, height } = elementRef.current.getBoundingClientRect()
    setHalfWidth(width / 2)
    setHalfHeight(-height / 2)
  }
  useEffect(() => {
    sizeItem()
  }, [width, height])
  return (
    <Container
      ref={elementRef}
      onMouseMove={(event) => coordTransform(event, setCoordTransformS, halfWidth, halfHeight)}
      onMouseLeave={() => restoreTransform(setCoordTransformS)}
    >
      {children}
    </Container>
  )
}

export default Wrapper
