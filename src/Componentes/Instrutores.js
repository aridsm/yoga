import React from 'react'
import useSlide from '../CustomHooks/useSlide'
import styles from '../Styles/Instrutores.module.css'

const instrutores = [
  {
    nome: 'Jean',
    descricao: 'Maecenas eget ultricies enim',
    img: 'inst1.jpg'
  },
  {
    nome: 'Jessica',
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
    nome: 'Livia',
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

  const { slideNext, slidePrev, positionWidth, containerSlideRef } = useSlide(4)

  return (
    <section className={`container ${styles.instrutores}`}>
      <h2>Conheça os instrutores</h2>
      <div className={styles.btns}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Proximo</button>
      </div>
      <div className={styles.containerInstrutores}>
        <ul className={styles.listaInstrutores} ref={containerSlideRef} style={{ left: `${positionWidth}px` }} >
          {instrutores.map(instrutor => (
            <li key={instrutor.nome}>
              <a href='/'>
                <img src={instrutor.img} alt={instrutor.nome} className={styles.img}></img>
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