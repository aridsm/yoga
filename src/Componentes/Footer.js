import React from 'react'
import styles from '../Styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.containerFooter}`}>
        <div className={styles.menu}>
          <p className={styles.titulo}>Menu</p>
          <nav>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/'>Aulas</a></li>
              <li><a href='/'>Modalidades</a></li>
              <li><a href='/'>Instrutores</a></li>
              <li><a href='/'>Sobre</a></li>
              <li><a href='/'>Area do usuario</a></li>
              <li><a href='/'>Contato</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <p className={styles.titulo}>Contato</p>
          <div className={styles.itensFooter}>
            <span>contato@contato.com</span>
            <span>(12) 3456-7890</span>
          </div>
        </div>
        <div>
          <p className={styles.titulo}>Endereço</p>
          <div className={styles.itensFooter}>
            <p>Lorem Ipsum - IP</p>
            <p>Dolor sit - Lorem, 111</p>
            <p>12345-678</p>
          </div>
        </div>
        <div className={styles.copy}>
          <span>Copyright © 2022 - Todos os direitos reservados</span>
          <span className={styles.links}>
            <a href='/'>Termos e condiçoes</a>
            <a href='/'>Politicas de privacidade</a>
          </span>
        </div>
        <a href='https://github.com/aridsm' className={styles.by}>By Ariane Morelato</a>
      </div>
    </footer>
  )
}

export default Footer