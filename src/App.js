import "./App.css";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import MyDetalis from "./Components/MyDetalis";
import Skills from "./Components/Skills";
import Protfolio from "./Components/Portfolio";
import Whatsapp from "./Components/Whatsapp";

function App() {
  return(
  <>
    <Router>
      <Navbar/>
      <Whatsapp/>
      <Routes>
        <Route index element={<MyDetalis/>}/>
        <Route path="/home" element={<MyDetalis/>}/>
        <Route path="/skill" element={<Skills/>}/>
        <Route path="/portfolio" element={<Protfolio/>}/>
      </Routes>
      <Footer/>
    </Router>
  </>
  );
}

export default App;
