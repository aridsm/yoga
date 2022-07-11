import React from 'react'
import styles from '../Styles/Entrada.module.css'
import fotoEntrada from '../assets/entrada.jpg'

const cards = [
  {
    titulo: 'Instrutores especializados',
    valor: 12
  },
  {
    titulo: 'Aulas gravadas',
    valor: 218
  },
  {
    titulo: 'Alunos matriculados',
    valor: 342
  }
]
const Entrada = () => {

  return (
    <section className={`container ${styles.entrada}`}>
      <div className={styles.content}>
        <div className={styles.textos}>
          <h1 className={styles.titulo}>Lorem ipsum dolor sit amet</h1>
          <p>Cras rhoncus rhoncus mi nec suscipit. Fusce at mi nec nunc condimentum volutpat. Nulla sit amet mi velit.</p>
          <a href='/' className={`btnPreto`}>Comece o teste grátis de 7 dias</a>
        </div>
        <ul className={styles.listaNumeros}>
          {cards.map(card =>
            <li key={card.titulo}>
              <p className={styles.numero}>{card.valor}</p>
              <p>{card.titulo}</p>
            </li>
          )}
        </ul>
      </div>
      <div className={styles.imgContainer}>
        <div className={styles.endereco}>
          <span>Lorem Ipsum - IP</span>
          <span>Dolor sit - Lorem, 111</span>
        </div>
        <div className={styles.img}>
          <img src={fotoEntrada} alt='Mulher meditando' width='19rem' height='27rem'></img>
        </div>
      </div>
    </section>
  )
}

export default Entrada