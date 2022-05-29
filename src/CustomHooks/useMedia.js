import React from 'react'

const useMedia = (maxWidth) => {

  const [matches, setMatches] = React.useState()

  React.useEffect(() => {
    function match() {
      setMatches(window.matchMedia(maxWidth).matches)
    }
    match()
    window.addEventListener('resize', match)
    return () => {
      window.removeEventListener('resize', match)
    }
  }, [maxWidth])

  return { matches }
}

export default useMedia