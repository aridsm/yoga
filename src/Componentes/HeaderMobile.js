import React from 'react'
import logo from '../assets/logo.png'
import styles from '../Styles/HeaderMobile.module.css'

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <>
      <button className={`${styles.btnMenu} ${isMenuOpen ? styles.active : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label='menu mobile'>
        <div></div>
        <div></div>
      </button>
      {
        isMenuOpen &&
        <nav className={styles.navItens}>
          <a href='/'>Home</a>
          <a href='/'>Aulas</a>
          <a href='/'>Instrutores</a>
          <a href='/'>Modalidades</a>
          <a href='/'>Sobre</a>
          <a href='/'>Contato</a>
          <a href='/'>Área do usuário</a>
        </nav>
      }
      <a href='/' className={styles.logo}><img src={logo} alt='logo'></img></a>
      <a href='/' className={`btnPreto ${styles.btnComeceAgora}`}>Comece agora</a>
    </>
  )
}

export default HeaderMobile