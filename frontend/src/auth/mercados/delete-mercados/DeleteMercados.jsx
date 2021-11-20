import React, { useState, useEffect } from "react";
import { MercadoStyled } from "../MercadoStyle";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FaUser as User, FaPhoneAlt as Phone, FaRegBuilding as Building, FaHome as Home } from "react-icons/fa";
import { MdEmail as Mail } from "react-icons/md";
import { BsBoxSeam as Box } from "react-icons/bs";

export default function DeleteMercados(props) {

    let idMercado = null
    idMercado = props.match.path.toLowerCase().includes('deletar-mercado') ? props.match.params.idMercado: null
    const [mercado, setMercados] = useState([])

    useEffect(() => {
        if(idMercado){
        fetch('/rest/mercado/' + idMercado).then((resp) => {
            return(resp.json())
        }).then((data) => {
            setMercados(data)
            console.table(data)
        }).catch((err) => {
            console.error(err)
        })
      }
    }, [idMercado])

    const handleDelete = (idMercado) => {
        fetch("/rest/mercado/" + idMercado, {
            method: 'DELETE',
        }).then(() => {
            window.location.reload()
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            <MercadoStyled>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className="py-4 titulo text-center" data-aos="fade-in">
                                    <h4><b>Deseja deletar esse mercado?</b></h4>
                                    <p className="text-muted muted">Isso apaga todos os respectivos produtos</p>
                                    <div className="text-center mt-4">
                                        <Link to="/mercado"><Button variant="danger" className="mx-3" onClick={handleDelete.bind(this, mercado.idMercado)}>Deletar</Button></Link>
                                        <Link to="/mercado"><Button className="btn-voltar mx-3" variant="mx-3">Voltar</Button></Link>
                                    </div>
                                </div>
                                <div className="box" data-aos="fade-in">
                                    <div className="flex-column align-items-center">
                                        <div className="row nowrap">
                                            <div className="col-md-5 col-sm-5 col-lg-5">
                                                <div className="flex-column">
                                                    <img src={mercado.foto} alt="foto do mercado" className="fotoMercados" />
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
                                                <ul className="ps-0">
                                                    <li className="d-flex align-items-center my-1">
                                                        <h6><b>Informações de Produtos</b></h6>
                                                    </li>
                                                    <li className="d-flex align-items-center my-1">
                                                        <Box /> <p className="my-0 ms-2">Quantidades de Produtos:<b className="mx-2">0</b></p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>
            </MercadoStyled>
        </>
    )
}