import Contact from "./componentes/Contact";
import Home from "./componentes/Home";
import Navbar from "./componentes/Navbar";
import NotFound from "./componentes/NotFound";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
