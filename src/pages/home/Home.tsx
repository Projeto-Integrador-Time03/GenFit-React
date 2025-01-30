import styles from "./Home.module.css";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  const [carouselImages] = useState([
    "https://i.ytimg.com/vi/0O43BT7q2jM/maxresdefault.jpg",
    "https://treinomestre.com.br/wp-content/uploads/2019/04/treino-de-academia.jpg",
    "https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2024/07/15/1315346897-istock-1488307332.jpg"
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
          <h2 className={styles.title} style={{ fontFamily: "Impact, sans-serif", fontSize: "3.5rem", textTransform: "uppercase", letterSpacing: "2px", color: "#ff7b00", textShadow: "6px 6px 5px rgba(153, 87, 33, 0.7)" }}>            
            Seja Bem-Vindo à GenFit!
          </h2>
        <img
          src="https://sportlife.com.br/wp-content/uploads/2023/04/Exercicios-1.jpg"
          alt="Imagem da Página Home"
          className={styles.image}
        />
        <div className="text-center" style={{marginTop: "30px" }}>
          <p className={styles.description}>
            Transforme seu corpo e mente com os melhores treinos e dicas de saúde!
          </p>
        </div>
      </div>

      <div className={styles.orangeBanner} style={{ height: "12px", marginBottom: "-1px" }}></div>
     
      <div className={styles.blackBanner}>
        <div className={styles.carouselWrapper}>
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            {carouselImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index + 1}`} className={styles.carouselImage} style={{ height: "500px" }} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className={styles.orangeBanner} style={{ height: "12px",  marginTop: "-1px" }}></div>
     
      <div className={styles.trainingInfo} style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "50px" }}>
        <div className={styles.textSection} style={{ fontSize: "1.2rem", lineHeight: "1.6", fontFamily: "Arial, sans-serif" }}>
          <h3 style={{ fontSize: "2rem", fontWeight: "bold", color: "#333" }}>Principais Músculos e Treinos</h3>
          <p><strong>Peitoral:</strong> Para fortalecer o peitoral, exercícios como supino reto, supino inclinado, crossover e flexões são essenciais. Eles ativam diferentes partes do músculo, garantindo um desenvolvimento completo.</p>
          <p><strong>Costas:</strong> Para uma musculatura dorsal forte, foque em barra fixa, remada curvada, pulley e levantamento terra. Esses exercícios melhoram a postura e aumentam a resistência.</p>
          <p><strong>Ombros:</strong> Desenvolvimento militar, elevação lateral e crucifixo invertido são fundamentais para ombros largos e definidos, contribuindo para a estabilidade e força do tronco.</p>
          <p><strong>Braços:</strong> O bíceps responde bem à rosca direta e rosca martelo, enquanto o tríceps se desenvolve com tríceps corda e mergulho nas paralelas. Variar os ângulos e cargas é essencial para maximizar o crescimento muscular.</p>
          <p><strong>Abdômen:</strong> Para um core forte, invista em prancha, abdominal infra, abdominal oblíquo e elevação de pernas. Além da estética, um abdômen fortalecido melhora a estabilidade corporal.</p>
          <p><strong>Pernas:</strong> Quadríceps, posteriores e panturrilhas exigem exercícios como agachamento livre, leg press, stiff, avanço e panturrilha em pé. Trabalhar toda a musculatura das pernas garante força e equilíbrio.</p>
          <p>Para obter os melhores resultados, é essencial combinar diferentes métodos de treino e respeitar o tempo de descanso. Consulte um profissional para ajustar os exercícios às suas necessidades e objetivos!</p>
        </div>
        <img 
          src="https://enfermagemflorence.com.br/wp-content/uploads/2021/02/musculos.jpg" 
          alt="Imagem sobre treinos" 
          className={styles.trainingImage} 
          style={{ width: "60%", maxWidth: "2500px" }}
        />
      </div>

      <div className={styles.orangeBanner} style={{ height: "500px", display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", padding: "20px", marginTop: "100px" }}>
        <img 
          src="https://m.media-amazon.com/images/I/81JfFScP5nL._UF894,1000_QL80_.jpg" 
          alt="Equipe GenFit" 
          style={{ width: "40%", maxWidth: "400px", borderRadius: "10px" }}
        />
        <div style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold", textAlign: "left" }}>
          <h3 style={{ fontSize: "2rem", color: "#222" }}>MELHOR EQUIPE DO MUNDO!</h3>
          <p>GenFit e sua equipe montam treinos personalizados todos os dias.</p>
          <p>Exercícios adaptados para o seu objetivo.</p>
          <p>Acompanhamento e orientação especializada.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
