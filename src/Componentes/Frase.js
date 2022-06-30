import styles from '../Styles/Frase.module.css'
import React from 'react'
import foto from '../assets/pc.jpg'

const Frase = () => {
  return (
    <section className={`container ${styles.fraseContainer}`}>
      <figure className={styles.citation}>
        <blockquote>
          Aliquam pulvinar pellentesque felis, non efficitur nulla dictum at. Vestibulum ultricies leo vitae dui tincidunt malesuada.
        </blockquote>
        <figcaption>Lorem ipsum</figcaption>
      </figure>
      <div className={styles.img}>
        <img src={foto} alt='Mulher mexendo no notebook'></img>
      </div>
    </section>
  )
}

export default Frase