import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import '../../App.css'

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light pb-4 pt-4">
    <div className="container">
      <Link to="/" className="navbar-brand" href="#"><h1 className="title-font fs-1 navbar-brand">Rick and Morty</h1></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        {/* <span className="navbar-toggler-icon"></span> */}
        <i className="bi bi-list" style={{fontSize:"30px", color:"#b2df28"}}></i>
      </button>
      <div className="collapse navbar-collapse fs-5 justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link greentext">Characters</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Episode" className="nav-link greentext">Episodes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Location" className="nav-link greentext">Location</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default navbar