const coordTransform = (
  event,
  setCoordTransformS,
  halfWidth,
  halfHeight,
  setTranslateDiv,
  times
) => {
  const { offsetX, offsetY } = event.nativeEvent
  const rotationY = ((offsetX - halfWidth) / halfWidth) * 10
  const rotationX = ((offsetY + halfHeight) / halfHeight) * 10
  setCoordTransformS({
    transitionDuration: `${times}ms`,
    transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
    transitionTimingFuntion: 'ease-out'
  })
  setTranslateDiv({
    transitionDuration: '300ms',
    transform: 'translate3d(0, 0, 120px)',
    transitionTimingFuntion: 'ease-out'
  })
}
const restoreTransform = (setCoordTransformS, setTranslateDiv) => {
  setCoordTransformS({
    transitionDuration: '300ms',
    transform: 'rotateX(0deg) rotateY(0deg)'
  })
  setTranslateDiv({
    transform: 'translate3d(0, 0, 0px)',
    transitionDuration: '300ms'
  })
}
export { coordTransform, restoreTransform }
