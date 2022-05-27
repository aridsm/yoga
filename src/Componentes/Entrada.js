import React from 'react'
import styles from '../Styles/Entrada.module.css'
import fotoEntrada from '../assets/entrada.jpg'

const Entrada = () => {
  return (
    <section className={`container ${styles.entrada}`}>
      <div className={styles.endereco}>
        <span>Lorem Ipsum - IP</span>
        <span>Dolor sit - Lorem, 111</span>
      </div>
      <div className={styles.content}>
        <div className={styles.textos}>
          <h1 className={styles.titulo}>Lorem ipsum dolor sit amet</h1>
          <p>Cras rhoncus rhoncus mi nec suscipit. Fusce at mi nec nunc condimentum volutpat. Nulla sit amet mi velit.</p>
          <a href='/' className={`btnPreto`}>Comece o teste gratis de 7 dias</a>
        </div>
        <ul className={styles.listaNumeros}>
          <li>
            <p className={styles.numero}>12</p>
            <p>Instrutores especializados</p>
          </li>
          <li>
            <p className={styles.numero}>218</p>
            <p>Aulas gravadas</p>
          </li>
          <li>
            <p className={styles.numero}>342</p>
            <p>alunos matriculados</p>
          </li>
        </ul>
      </div>
      <div className={styles.imgContainer}>
        <div className={styles.img}>
          <img src={fotoEntrada} alt='Mulher meditando'></img>
        </div>
      </div>
    </section>
  )
}

export default Entrada