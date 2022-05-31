import React from 'react'
import logo from '../assets/logo.png'
import styles from '../Styles/HeaderMobile.module.css'

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const refBtnClick = React.useRef()
  const refNavClick = React.useRef()

  React.useEffect(() => {
    function clickOutside({ target }) {
      function containsElement(el) {
        return el.current.contains(target)
      }
      if (!containsElement(refBtnClick) && (refNavClick && !containsElement(refNavClick))) {
        setIsMenuOpen(false);

        console.log('botao contem o target')
      }
    }
    window.addEventListener('click', clickOutside)
    return () => {
      window.removeEventListener('click', clickOutside)
    }
  }, [])

  return (
    <>
      <button className={`${styles.btnMenu} ${isMenuOpen ? styles.active : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} ref={refBtnClick}>
        <div></div>
        <div></div>
      </button>
      {
        isMenuOpen &&
        <nav className={styles.navItens} ref={refNavClick}>
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