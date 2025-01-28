import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          src="https://files.oaiusercontent.com/file-H4BgNnwKCwKKUY8Qq8Z9L7?se=2025-01-28T17%3A50%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D455dcaf7-51be-4b06-a022-e85b03a5bcb1.webp&sig=2Gtp7uP1z5v%2BbdyMqPO5Gv4wpm0eE4GRPd/ipvA%2BX6c%3D"
          alt="Imagem da Página Home"
          className={styles.image}
        />
        <div className="text-center">
          <h2 className={styles.title}>Seja Bem Vindo à GenFit!</h2>
          <p className={styles.description}>
            Aprenda os melhores exercícios e tenha qualidade de vida.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
