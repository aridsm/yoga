import React from 'react'
import useSlide from '../CustomHooks/useSlide'
import styles from '../Styles/Planos.module.css'
import Plano from './Plano'
import useMedia from '../CustomHooks/useMedia'

const Planos = () => {

  const [itensAtATime, setItensAtATime] = React.useState(3)
  const { slideNext, slidePrev, positionWidth, containerSlideRef, setSlidePosition } = useSlide(itensAtATime)
  const matchMedium = useMedia('(max-width: 800px)')
  const matchSmall = useMedia('(max-width: 550px)')

  React.useEffect(() => {
    function changeItensAtATime() {
      if (matchSmall) {
        setItensAtATime(1)
      } else if (matchMedium) {
        setItensAtATime(2)
      } else {
        setItensAtATime(3)
      }
    }
    window.addEventListener('resize', changeItensAtATime)
    return () => {
      window.removeEventListener('resize', changeItensAtATime)
    }

  }, [matchMedium, matchSmall, setSlidePosition])

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