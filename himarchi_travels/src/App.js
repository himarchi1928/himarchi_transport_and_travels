
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Gallary from './Pages/Gallary/Gallary';
import ContactUs from './Pages/ContactUs/ContactUs';
import Services from './Pages/Services/Services';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

        <Navbar/>

        <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/AboutUs" element={<AboutUs />}/>
                <Route path="/Gallary" element={<Gallary />}/>
                <Route path="/ContactUs" element={<ContactUs />}/>
                <Route path="/Services" element={<Services />}/>   
        </Routes>

      </BrowserRouter>

      
    </div>
  );
}

export default App;
