import React from 'react'
import useSlide from '../CustomHooks/useSlide'
import styles from '../Styles/Planos.module.css'
import Plano from './Plano'

const Planos = () => {

  const { slideNext, slidePrev, positionWidth, containerSlideRef } = useSlide(3)

  return (
    <section className={`container ${styles.planos}`}>
      <header className={styles.header}>
        <h2>Nossos planos</h2>
        <div className={styles.btns}>
          <button onClick={slidePrev}>Anterior</button>
          <button onClick={slideNext}>Proximo</button>
        </div>
      </header>
      <div className={styles.containerPlanos}>
        <ul className={styles.listaPlanos} style={{ left: `${positionWidth}px` }} ref={containerSlideRef}>
          <Plano preco='159,00' plano='Yoga' />
          <Plano preco='319,00' plano='Completo' />
          <Plano preco='129,00' plano='Pilates' />
          <Plano preco='109,00' plano='Meditaçao' />
        </ul>
      </div>
      <a href='/' className={`btnPreto ${styles.linkComecar}`}>Comece o teste de 7 dias gratis</a>
    </section >
  )
}

export default Planos