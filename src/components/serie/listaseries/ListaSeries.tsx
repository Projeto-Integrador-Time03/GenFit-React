import CardSeries from "../cardseries/CardSeries";

function ListaPostagens() {
  return (
    <>
      <div className="bg-gradient-to-b from-black to-white min-h-screen py-10">
        <div
          className="container mx-auto 
                grid grid-cols-1 md:grid-cols-2 
            	lg:grid-cols-3 gap-4"
        >
          <CardSeries />
        </div>
      </div>
    </>
  );
}

export default ListaPostagens;
