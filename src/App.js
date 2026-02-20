
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Gallary from './Pages/Gallary/Gallary';
import ContactUs from './Pages/ContactUs/ContactUs';
import Services from './Pages/Services/Services';
import {HashRouter, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <HashRouter basename="/">

        <Navbar/>

        <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/AboutUs" element={<AboutUs />}/>
                <Route path="/Gallary" element={<Gallary />}/>
                <Route path="/ContactUs" element={<ContactUs />}/>
                <Route path="/Services" element={<Services />}/>   
        </Routes>

      </HashRouter>

      
    </div>
  );
}

export default App;
