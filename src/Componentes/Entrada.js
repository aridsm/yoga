import React from 'react'
import styles from '../Styles/Entrada.module.css'
import fotoEntrada from '../assets/entrada.jpg'

const Entrada = () => {
  return (
    <section className={styles.entrada}>
      <div className={styles.endereco}>
        <span>Lorem Ipsum - IP</span>
        <span>Dolor sit - Lorem, 111</span>
      </div>
      <div className={styles.textos}>
        <h1 className={styles.titulo}>Lorem ipsum dolor sit amet</h1>
        <a href='/' className={`btnPreto`}>Comece o teste gratis de 7 dias</a>
      </div>
      <div className={styles.img}>
        <img src={fotoEntrada} alt='Mulher meditando'></img>
      </div>
    </section>
  )
}

export default Entrada