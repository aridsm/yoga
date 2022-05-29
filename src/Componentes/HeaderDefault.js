import React from 'react'
import styles from '../Styles/HeaderDefault.module.css'
import logo from '../assets/logo.png'

const HeaderDefault = () => {
  return (
    <>
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
    </>
  )
}

export default HeaderDefault