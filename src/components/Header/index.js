import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
       <div>
        
        
       <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a  className="navbar-brand fw-bold" href="#" >Quantum</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/Home" className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Services" className="nav-link active">Services</Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link active">About</Link>
        </li>
        
       
        
      </ul>
      <form className="d-flex">
        
      <Link to="/Signup"><button className="btn btn-info" type="submit">Signup</button></Link>
      </form>
    </div>
  </div>
</nav>

   
   </div>
    );
}

export default Header