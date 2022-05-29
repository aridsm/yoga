import React from 'react'

const useSlide = (itensLength) => {

  const [positionWidth, setPositionWidth] = React.useState(0)
  const [slidePosition, setSlidePosition] = React.useState(0)
  const containerSlideRef = React.useRef()

  React.useEffect(() => {
    const { width } = containerSlideRef.current.getBoundingClientRect()
    setPositionWidth(-((width / itensLength) * slidePosition))
  }, [slidePosition, itensLength])

  const slideNext = React.useCallback(() => {
    if (slidePosition < containerSlideRef.current.children.length - itensLength) {
      setSlidePosition(slidePosition + 1)
    }
  }, [slidePosition, itensLength])


  const slidePrev = React.useCallback(() => {
    if (slidePosition !== 0) {
      setSlidePosition(slidePosition - 1)
    }

  }, [slidePosition])

  return { slideNext, slidePrev, positionWidth, containerSlideRef, setSlidePosition }
}

export default useSlide