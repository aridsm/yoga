import React from 'react'
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
  return (
    <section className={`container ${styles.instrutores}`}>
      <h2>Conheça os instrutores</h2>
      <ul className={styles.listaInstrutores}>
     {instrutores.map(instrutor => (
       <li key={instrutor.nome}>
         <img src={instrutor.img} alt={instrutor.nome} className={styles.img}></img>
         <p className={styles.nome}>{instrutor.nome}</p>
         <p>{instrutor.descricao}dsd</p>
       </li>
     ))}
     </ul>
    </section>
  )
}

export default Instrutores