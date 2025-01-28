import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Seja Bem Vindo à GenFit!</h2>
        <p className={styles.description}>
          Aprenda os melhores exercícios e tenha qualidade de vida.
        </p>
        <img
          src="https://down-br.img.susercontent.com/file/4042fd5c3a4353057c3407ee83e1eb14"
          alt="Imagem da Página Home"
          className={styles.image}
        />
      </div>
    </div>
  );
}

export default Home;
