import styles from '../Styles/Plano.module.css'
import React from 'react'

const Plano = ({preco, cor, textColor, shadowColor, plano}) => {
  return (
    <li className={styles.itemPlano} style={{background: cor, color: textColor, boxShadow: `2px 2px 0 0 ${shadowColor}`}}>
        <h3 className={styles.modalidade}>{plano}</h3>
        <div className={styles.precos}>
          <span className={styles.rs}>R$</span>
          <span className={styles.valor}>{preco}</span>
          <span className={styles.aomes}>ao mes</span>
        </div>
        <ul className={styles.lista}>
          <li>Cras vulputate porta tortor</li>
          <li>Vivamus efficitur libero sit</li>
          <li>Aliquam a felis sit amet</li>
          <li>Ut tristique sem sed ante egestas</li>
          <li>Sed commodo urna in congue feugiat</li>
          <li>Suspendisse faucibus turpis</li>
        </ul>
        <a href='/' className={`btnPreto ${styles.btnAssinar}`} style={{background: textColor, color: cor}}>Assinar plano</a>
    </li>
  )
}

export default Plano