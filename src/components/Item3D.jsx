const coordTransform = (event, setCoordTransformS, halfWidth, halfHeight) => {
  const { offsetX, offsetY } = event.nativeEvent
  const rotationY = ((offsetX - halfWidth) / halfWidth) * 14
  const rotationX = ((offsetY + halfHeight) / halfHeight) * 14
  setCoordTransformS({
    transform: `translate3d(0, 0, 120px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
    transitionTimingFunction: 'ease-out'
  })
}
const restoreTransform = (setCoordTransformS) => {
  setCoordTransformS({
    transform: 'translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)'
  })
}
export { coordTransform, restoreTransform }
