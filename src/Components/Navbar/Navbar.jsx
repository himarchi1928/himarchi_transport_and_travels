import './Navbar.css';  
import {Link} from 'react-router-dom';

function Navbar()  {
    return (<div>
      

        <div className='nav' style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      background: "#fdb531",
      color: "white"
    }}>

           
            <Link to = '/' style={{ color: "white", textDecoration: "none" }}> <h2>HIMARCHI TRAVELS</h2></Link>
            <h3>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link to = '/' style={{ color: "white", textDecoration: "none" }}>Home</Link>
            <Link to = '/AboutUs' style={{ color: "white", textDecoration: "none" }}>About Us</Link>
            <Link to = '/Gallary' style={{ color: "white", textDecoration: "none" }}>Gallary</Link>
            <Link to = '/ContactUs' style={{ color: "white", textDecoration: "none" }}>Contact Us</Link>
            <Link to = '/Services'style={{ color: "white", textDecoration: "none" }}>Services</Link>
          </div>
          </h3>
        
     
        </div>
    </div>);
}   
export default Navbar;