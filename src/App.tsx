import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import ListaSeries from "./components/serie/listaseries/ListaSeries";
import Home from "./pages/home/Home";
import Sobre from "./pages/sobre/Sobre";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/series" element={<ListaSeries />} />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;