import React from 'react'
import styles from '../Styles/Planos.module.css'
import Plano from './Plano'

const Planos = () => {
  return (
    <section className={`container ${styles.planos}`}>
      <header className={styles.header}>
        <h2>Nossos planos</h2>
        <div className={styles.btns}>
          <button>Anterior</button>
          <button>Proximo</button>
        </div>
      </header>
      <ul className={styles.listaPlanos}>
        <Plano preco='159,00' plano='Yoga'/>
        <Plano preco='319,00' plano='Completo'/>  
        <Plano preco='129,00' plano='Pilates'/>
        <Plano preco='109,00' plano='Meditaçao'/>
      </ul>
      <a href='/' className={`btnPreto ${styles.linkComecar}`}>Comece o teste de 7 dias gratis</a>
    </section>
  )
}

export default Planos