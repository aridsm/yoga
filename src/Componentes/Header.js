import React from 'react'
import useMedia from '../CustomHooks/useMedia'
import HeaderDefault from './HeaderDefault'
import HeaderMobile from './HeaderMobile'
import styles from '../Styles/Header.module.css'
const Header = () => {

  const { matches } = useMedia('(max-width: 1150px)')
  const [isPageScrolled, setIsPageScrolled] = React.useState(false)

  const ref = React.useRef()

  React.useEffect(() => {
    function scrollHeader() {
      if (window.scrollY !== 0) {
        setIsPageScrolled(true)
      } else {
        setIsPageScrolled(false)
      }
    }
    window.addEventListener('scroll', scrollHeader)
    return () => {
      window.removeEventListener('scroll', scrollHeader)
    }
  }, [])

  return (
    <header className={`${styles.header} ${isPageScrolled ? styles.headerScrolled : ''}`} ref={ref}>
      <div className={styles.containerHeader}>
        <nav className={styles.nav}>
          {
            matches ?
              <HeaderMobile />
              :
              <HeaderDefault />
          }
        </nav>
      </div>
    </header>
  )
}

export default Header