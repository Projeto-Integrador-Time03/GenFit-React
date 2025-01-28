function Sobre() {
  return (
    <>
      <div className="bg-gradient-to-b from-black to-white flex justify-center min-h-screen">
        <div className="container flex text-white">
          <div className="flex flex-col gap-4 items-start py-20">
            <div className="flex  gap-4 items-center justify-center">
              <div className="flex flex-col gap-4 items-center justify-center">
                <h2 className="text-5xl font-bold" style={{ textShadow: '1px 1px 1px black' }}>Sobre nós</h2>
                <br />
                <p className="text-xl" style={{ textShadow: '1px 1px 1px black' }}>
                  Combinamos inovação e precisão técnica para desenvolver o
                  GenFit, uma plataforma de fitness personalizada que transforma
                  a maneira como as pessoas se conectam com sua saúde e
                  bem-estar, criando treinos sob medida e facilitando o
                  gerenciamento completo de usuários e exercícios.
                </p>
              </div>
              <img
                src="https://img.freepik.com/fotos-premium/ginasio-de-fundo-exercicio-de-fundo-textura-de-fundo-ginasio-textura-de-fondo-ginasio-academia-academia-ginasio_1246444-19634.jpg?w=740"
                alt="Foto de Academia"
                width={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sobre;
