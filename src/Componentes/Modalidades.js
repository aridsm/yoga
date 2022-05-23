import React from 'react'
import styles from '../Styles/Modalidades.module.css'

const Modalidades = () => {
  return (
    <section className={`container ${styles.modalidades}`}>
      <div className={styles.textos}>
        <h2>Conheça nossas modalidades</h2>
        <a href='/' className='btnPreto'>Comece agora</a>
      </div>
      <ul className={styles.ul}>
        <li>
          <a href='/'>
          <h3>Yoga</h3>
          <p>Fortalecimento muscular, flexibilidade e equilibrio para o dia-a-dia</p>
          <span className={styles.pontos}>...</span>
          </a>
        </li>
        <li>
          <a href='/'>
          <h3>Pilates</h3>
          <p>Fortalecimento muscular, flexibilidade e equilibrio para o dia-a-dia</p>
          <span className={styles.pontos}>...</span>
          </a>
        </li>
        <li>
          <a href='/'>
          <h3>Meditaçao guiada</h3>
          <p>Fortalecimento muscular, flexibilidade e equilibrio para o dia-a-dia</p>
          <span className={styles.pontos}>...</span>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Modalidades