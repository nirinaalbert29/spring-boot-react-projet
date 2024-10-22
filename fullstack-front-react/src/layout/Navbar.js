import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Spring Boot & React Application</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/comptes">Compte</Link>
                </li>
              </ul>
            </div>
            <Link to={'/Adduser'} className='btn btn-outline-light'>Add new User</Link> 
            <Link to={'/compte/add'} className='btn btn-outline-light'>Add new compte</Link> 
          </div>
        </nav>
    </div>
  )
}
