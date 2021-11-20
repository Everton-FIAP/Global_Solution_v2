import React from "react";
import { FooterStyled } from "./FooterStyled";
import { FaFacebookF as Facebook, FaGithubAlt as Github, FaInstagram as Instagram, FaTwitter as Twitter, FaTumblr as Tumblr } from "react-icons/fa";
import { FaHome as Home, FaPhoneAlt as Phone } from "react-icons/fa";
import { MdEmail as Mail } from "react-icons/md";


export default function Footer() {
    return (
        <>
            <FooterStyled>
                <footer className="container-fluid">
                    <div className="col-md-12">
                        <div className="row justify-content-center">
                            <div className="col-md-5 mb-5">
                                <h6 className="text-center texto">Visite-nos em nossas redes sociais!</h6>
                                <div className="d-flex justify-content-center flex-wrap">
                                    <div className="row">
                                        <button id="icon-facebook" className="icon btn btn-primary btn-circle mx-2"><Facebook style={{ fontSize: "2.3rem" }} /></button>
                                        <button id="icon-instagram" className="icon btn btn-primary btn-circle mx-2"><Instagram style={{ fontSize: "2.3rem" }} /></button>
                                        <button id="icon-twitter" className="icon btn btn-primary btn-circle mx-2"><Twitter style={{ fontSize: "2.3rem" }} /></button>
                                        <button id="icon-tumblr" className="icon btn btn-primary btn-circle mx-2"><Tumblr style={{ fontSize: "2.3rem" }} /></button>
                                        <button id="icon-github" className="icon btn btn-primary btn-circle mx-2"><Github style={{ fontSize: "2.3rem" }} /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d-flex justify-content-center flex-wrap">
                                    <div className="flex-column mb-3">
                                        <h6 className="text-center texto mb-3 me-0">Contate-nos</h6>
                                        <ul>
                                            <li className="d-flex align-items-center">
                                                <Home style={{ fontSize: "1.5rem", margin: "0.75rem", color: "#FFFFFF"}} /> <p className="m-0 text-white bold">Av. Lins de Vasconcelos, 1222</p>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <Mail style={{ fontSize: "1.5rem", margin: "0.75rem", color: "#FFFFFF"}} /> <p className="m-0 text-white bold">contato@email.com</p>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <Phone style={{ fontSize: "1.5rem", margin: "0.75rem", color: "#FFFFFF"}} /> <p className="m-0 text-white bold">+55 (11) 91234 - 5678</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </FooterStyled>
        </>
    )
}