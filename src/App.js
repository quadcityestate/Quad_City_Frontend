import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./router/Home";
import { Navbar } from "./shared/Navbar";
import { Footer } from "./shared/Footer";
import { Services } from "./router/Services";
import {ServicesEach} from './router/ServicesEach'
import { ServicesCategory } from "./router/ServicesCategory";
// import '../src/assets/js/particle';
// import '../src/assets/css/particle.css'

function App() {

  return (
    <div className="App w-full absolute bg-white">

        <BrowserRouter>
      {/* navbar  Section */}
      <Navbar />

      {/* Main content */}
      <div id="main" className="main w-full pt-20 pb-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="services/:item?" element={<ServicesEach />} />
            <Route path="services/:item?/:item?" element={<ServicesCategory />} />
            <Route path="*" element={<Navigate to={'/'}/>} />
            {/* <Route path="/particle" element={<Particales />} /> */}
          </Routes>

      </div>

      {/* Footer Section */}
      <Footer />
        </BrowserRouter>
    
    </div>
  );
}

export default App;
