import React from 'react'

const useSlide = (itensLength) => {

  const [positionWidth, setPositionWidth] = React.useState(0)
  const [slidePosition, setSlidePosition] = React.useState(0)
  const [itensAtATime, setItensAtATime] = React.useState(itensLength)
  const containerSlideRef = React.useRef()

  React.useEffect(() => {
    const { width } = containerSlideRef.current.getBoundingClientRect()
    setPositionWidth(-((width / itensAtATime) * slidePosition))
  }, [slidePosition, itensAtATime])

  const slideNext = React.useCallback(() => {
    if (slidePosition < containerSlideRef.current.children.length - itensAtATime) {
      setSlidePosition(slidePosition + 1)
    }
  }, [slidePosition, itensAtATime])


  const slidePrev = React.useCallback(() => {
    if (slidePosition !== 0) {
      setSlidePosition(slidePosition - 1)
    }

  }, [slidePosition])

  return { slideNext, slidePrev, positionWidth, containerSlideRef }
}

export default useSlide