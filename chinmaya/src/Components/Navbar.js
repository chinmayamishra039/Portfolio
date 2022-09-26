import React from 'react'
import '../App.css'
// ! Font Awsome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <div className="container">

                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBarsStaggered}  className="faBarsStaggered"/>
                        </button>
                        <div className="collapse navbar-collapse ms-auto" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sevices</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">AboutMe</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Showmore</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contacts</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            </>
    )
}

export default Navbar