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
        <Plano preco='159,00' cor='#d4e9e2' textColor='#45695E' shadowColor='#b5e1d4cc' plano='Yoga'/>
        <Plano preco='249,00' cor='#eddef0' textColor='#644D68' shadowColor='#ddb4e3b3' plano='Completo'/>  <Plano preco='129,00' cor='#ececc5' textColor='#7E7A54' shadowColor='#7e7a5440' plano='Pilates'/>
      </ul>
      <a href='/' className={`btnPreto ${styles.linkComecar}`}>Comece o teste de 7 dias gratis</a>
    </section>
  )
}

export default Planos