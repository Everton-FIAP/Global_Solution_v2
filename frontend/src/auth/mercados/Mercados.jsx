import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";
import PostMercados from "./post-mercados/PostMercados";

import { MercadoStyled } from "./MercadoStyle";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FaUser as User, FaPhoneAlt as Phone, FaRegBuilding as Building, FaHome as Home } from "react-icons/fa";
import { MdEmail as Mail } from "react-icons/md";
import { TiDelete as Delete } from "react-icons/ti";
import { AiOutlineEdit as Edit } from "react-icons/ai";

export default function Mercados() {
    const [mercados, setMercados] = useState([])

    useEffect(() => {
        fetch('/rest/mercado').then((resp) => {
            return resp.json()
        }).then((resp) => {
            setMercados(resp)
            console.table(resp)
        }).catch((err) => {
            console.error(err)
        })
    }, [])

    return (
        <>
            <MercadoStyled>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="py-4 titulo" data-aos="fade-in">
                            <h2><b>Lista de Mercados</b></h2>
                        </div>
                        <div data-aos="fade-in">
                            <PostMercados />
                        </div>
                        {mercados.map((mercado) => (
                            <div className="box" data-aos="fade-up">
                                <div className="flex-column align-items-center">
                                    <div className="row nowrap">
                                        <div className="col-md-5 col-sm-5 col-lg-5">
                                            <div className="flex-column">
                                                <img src={mercado.foto} alt="foto" className="fotoMercados" />
                                                <div className="text-center mt-4">
                                                    <Link to={`${mercado.idMercado}/produtos`}><Button variant="primary">Ver Produtos</Button></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-7 py-2 px-5">
                                            <ul className="ps-0">
                                                <li className="d-flex align-items-center my-1">
                                                    <User /> <p className="my-0 ms-2">{mercado.nome}</p>
                                                </li>
                                                <li className="d-flex align-items-center my-1">
                                                    <Building /> <p className="my-0 ms-2">{mercado.cnpj}</p>
                                                </li>
                                                <li className="d-flex align-items-center my-1">
                                                    <Mail /> <p className="my-0 ms-2">{mercado.email}</p>
                                                </li>
                                                <li className="d-flex align-items-center my-1">
                                                    <Phone /> <p className="my-0 ms-2">{mercado.telefone}</p>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <Home /> <p className="my-0 ms-2">{mercado.endereco}</p>
                                                </li>
                                            </ul>
                                            <hr />
                                            <div className="d-flex justify-content-center align-items-center mt-5">
                                                <Link to={`/editar-mercado/${mercado.idMercado}`} ><Edit id="icon-edit" className="mx-3 icone" style={{ fontSize: "2.77rem" }} /></Link>
                                                <Link to={`/deletar-mercado/${mercado.idMercado}`}><Delete id="icon-delete" className="icone" style={{ fontSize: "3.5rem" }} /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </MercadoStyled>
        </>
    )
};