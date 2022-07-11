import React from 'react'
import styles from '../Styles/Modalidades.module.css'

const modalidades = [
  {
    nome: 'Yoga',
    descricao: 'Fortalecimento muscular, flexibilidade e equilibrio para o dia-a-dia',
    link: '/'
  },
  {
    nome: 'Pilates',
    descricao: 'Fortalecimento muscular, flexibilidade e equilibrio para o dia-a-dia',
    link: '/'
  },
  {
    nome: 'Meditaçao guiada',
    descricao: 'Fortalecimento muscular, flexibilidade e equilibrio para o dia-a-dia',
    link: '/'
  },
]

const Modalidades = () => {
  return (
    <section className={`container ${styles.modalidades}`}>
      <div className={styles.textos}>
        <h2>Conheça nossas modalidades</h2>
        <a href='/' className='btnPreto'>Comece agora</a>
      </div>
      <ul className={styles.ul}>
        {modalidades.map(modalidade =>
          <li key={modalidade.nome}>
            <a href={modalidade.link}>
              <h3>{modalidade.nome}</h3>
              <p>{modalidade.descricao}</p>
              <span className={styles.pontos}>...</span>
            </a>
          </li>
        )}
      </ul>
    </section>
  )
}

export default Modalidades