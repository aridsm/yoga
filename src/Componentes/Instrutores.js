import React from 'react'
import useMedia from '../CustomHooks/useMedia'
import useSlide from '../CustomHooks/useSlide'
import styles from '../Styles/Instrutores.module.css'

const instrutores = [
  {
    nome: 'Jean',
    descricao: 'Maecenas eget ultricies enim',
    img: 'inst1.jpg'
  },
  {
    nome: 'Jéssica',
    descricao: 'Maecenas eget ultricies enim',
    img: 'inst2.jpg'
  },
  {
    nome: 'Ana',
    descricao: 'Maecenas eget ultricies enim',
    img: 'inst3.jpg'
  },
  {
    nome: 'Felipe',
    descricao: 'Maecenas eget ultricies enim',
    img: 'inst4.jpg'
  },
  {
    nome: 'Lívia',
    descricao: 'Maecenas eget ultricies enim',
    img: 'inst5.jpg'
  },
  {
    nome: 'Mark',
    descricao: 'Maecenas eget ultricies enim',
    img: 'inst6.jpg'
  },
]

const Instrutores = () => {

  const [itensAtATime, setItensAtATime] = React.useState(4)
  const { slideNext, slidePrev, positionWidth, containerSlideRef, setSlidePosition } = useSlide(itensAtATime)
  const matchMedium = useMedia('(max-width: 800px)').matches
  const matchSmall = useMedia('(max-width: 550px)').matches
  const matchExtraSmall = useMedia('(max-width: 390px)').matches

  React.useEffect(() => {
    function changeItensAtATime() {
      if (matchExtraSmall) {
        setItensAtATime(1)
      } else if (matchSmall) {
        setItensAtATime(2)
      } else if (matchMedium) {
        setItensAtATime(3)
      } else {
        setItensAtATime(4)
      }
    }
    setSlidePosition(0)
    changeItensAtATime()
    window.addEventListener('resize', changeItensAtATime)
    return () => {
      window.removeEventListener('resize', changeItensAtATime)
    }

  }, [matchMedium, matchSmall, setSlidePosition, matchExtraSmall])

  return (
    <section className={`container ${styles.instrutores}`}>
      <h2>Conheça os instrutores</h2>
      <div className={styles.btns}>
        <button onClick={slidePrev} aria-label='instrutor anterior'>Anterior</button>
        <button onClick={slideNext} aria-label='proximo instrutor'>Próximo</button>
      </div>
      <div className={styles.containerInstrutores}>
        <ul className={styles.listaInstrutores} ref={containerSlideRef} style={{ left: `${positionWidth}px` }} >
          {instrutores.map(instrutor => (
            <li key={instrutor.nome}>
              <a href='/'>
                <img src={require(`../assets/${instrutor.img}`)} alt={instrutor.nome} className={styles.img}></img>
                <p className={styles.nome}>{instrutor.nome}</p>
                <p>{instrutor.descricao}dsd</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Instrutores