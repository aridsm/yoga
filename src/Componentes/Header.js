import React from 'react'
import logo from '../assets/logo.png'
import styles from '../Styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
      <nav className={styles.nav}>
        <div className={styles.col1Nav}>
          <a href='/'>Home</a>
          <a href='/'>Aulas</a>
          <a href='/'>Instrutores</a>
          <a href='/'>Modalidades</a>
        </div>
        <a href='/' className={styles.logo}><img src={logo} alt='logo'></img></a>
        <div className={styles.col2Nav}>
          <a href='/'>Sobre</a>
          <a href='/'>Contato</a>
          <a href='/'>Area do usuario</a>
          <a href='/' className='btnPreto'>Comece agora</a>
        </div>
      </nav>
      </div>
    </header>
  )
}

export default Header