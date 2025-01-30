import { Link } from "react-router-dom";
import styles from "./CardSeries.module.css";

function CardSeries() {
  return (
    <div className={styles.card}>
      {/* Cabeçalho com usuário */}
      <div className={styles.header}>
        <img
          src="https://i.imgur.com/pK6vSCy.png"
          className={styles.avatar}
          alt="Usuário"
        />
        <h3 className={styles.userName}>Nome do Usuário</h3>
      </div>

      {/* Conteúdo */}
      <div className={styles.content}>
        <h4 className={styles.seriesTitle}>Nome da Série</h4>
        <p className={styles.description}>Descrição detalhada do exercício.</p>
        <p><span className={styles.label}>Exercício:</span> Nome do exercício</p>
        <p><span className={styles.label}>Período:</span> Manhã / Tarde / Noite</p>
      </div>

      {/* Botões */}
      <div className={styles.buttonContainer}>
        <Link to="" className={`${styles.button} ${styles.editButton}`}>
          Editar
        </Link>
        <Link to="" className={`${styles.button} ${styles.deleteButton}`}>
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardSeries;
