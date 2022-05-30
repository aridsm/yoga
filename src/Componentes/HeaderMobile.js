import React from 'react'
import logo from '../assets/logo.png'
import styles from '../Styles/HeaderMobile.module.css'

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <>
      <button className={styles.btnMenu} onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
          <a href='/'>Area do usuario</a>
        </nav>
      }
      <a href='/' className={styles.logo}><img src={logo} alt='logo'></img></a>
      <a href='/' className={`btnPreto ${styles.btnComeceAgora}`}>Comece agora</a>
    </>
  )
}

export default HeaderMobile