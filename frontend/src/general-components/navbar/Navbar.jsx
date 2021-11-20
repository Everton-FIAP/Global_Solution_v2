import React from "react";
import { Link } from "react-router-dom";
import { NavbarStyled } from "./NavbarStyled";

export default function Navbar() {
    return (
        <>
            <NavbarStyled>
                <header className="sticky-top">
                    <nav className="navbar navbar-expand-lg navbar-dark py-0">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link to="/home"><a href="#!" className="nav-link text-white">Home</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/mercado"><a href="#!" className="nav-link text-white">Mercados</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/quem-somos"><a href="#!" className="nav-link text-white">Quem Somos</a></Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </NavbarStyled>
        </>
    )
}