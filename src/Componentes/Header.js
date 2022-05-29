import React from 'react'
import useMedia from '../CustomHooks/useMedia'
import HeaderDefault from './HeaderDefault'
import HeaderMobile from './HeaderMobile'
import styles from '../Styles/Header.module.css'
const Header = () => {

  const { matches } = useMedia('(max-width: 1150px)')

  return (
    <header className={styles.header}>
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