import React from 'react'
import {
    NavLink
} from "react-router-dom";
import { Nav } from 'reactstrap';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <NavLink to="/"><img src='https://166.az/site/img/Logo.png?v=1574778128' /></NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Xidmətlər
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><NavLink to='freight'>Yükdaşıma </NavLink></li>
                                <li><NavLink to='carpetwash'>Xalça yuma </NavLink></li>
                            <li><NavLink to='evacuation'>Evakuasiya</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink to="campaigns">Kampaniyalar</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Şirkətimiz
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Haqqımızda </a></li>
                                <li><a className="dropdown-item" href="#">Bizim komanda </a></li>
                            <li><a className="dropdown-item" href="#">Tez-tez verilən suallar</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink to="contact">Əlaqə</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar