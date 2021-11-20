import React, { useState, useEffect } from "react";
import { MercadoStyled } from "../MercadoStyle";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PutMercados(props) {

    let idMercado = props.match.path.toLowerCase().includes('editar-mercado') ? props.match.params.idMercado : null

    const [novo, setNovo] = useState({
        idMercado: idMercado,
        nome: "",
        cnpj: "",
        endereco: "",
        telefone: "",
        email: "",
        foto: "",
        idRede: ""
    })

    const [mercado, setMercados] = useState([])
    
    useEffect(() => {
        if (idMercado) {
            fetch('/rest/mercado/' + idMercado).then((resp) => {
                return (resp.json())
            }).then((data) => {
                setMercados(data)
                console.table(data)
            }).catch((err) => {
                console.error(err)
            })
        }
    }, [idMercado])

    const handleChange = (e) => {
        setNovo({ ...novo, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        if (idMercado) {
            fetch("/rest/mercado/" + idMercado).then(resp => {
                return (resp.json())
            }).then(data => {
                setNovo(data)
            })
        }
    }, [idMercado])


    let metodo = 'PUT';

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('/rest/mercado/' + idMercado, {
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novo)
        }).then(() => {
            window.location = document.referrer
        })
    }

    return (
        <>
            <MercadoStyled>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="pt-5 titulo text-center" data-aos="fade-in">
                            <h4><b>Editar Mercado</b></h4>
                        </div>
                        <div className="box" data-aos="fade-in">
                            <div className="flex-column align-items-center">
                                <div className="row nowrap">
                                    <div className="col-md-5 col-sm-5 col-lg-5">
                                        <div className="flex-column">
                                            <img src={mercado.foto} alt="foto" className="fotoMercados" />
                                        </div>
                                    </div>
                                    <div className="col-md-7 pb-2 px-5">
                                        <div className="flex-column">
                                            <div className="col-md-12 col-lg-12 col-sm-12">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="form-group">
                                                        <label for="exampleFormControlInput1">ID</label>
                                                        <input type="number" name="id" value={novo.idMercado} className="form-control my-1" id="exampleFormControlInput1" placeholder="Insira um novo id" onChange={handleChange} disabled />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="exampleFormControlInput1">Nome</label>
                                                        <input type="text" name="nome" value={novo.nome} className="form-control my-1" id="exampleFormControlInput1" placeholder="Insira um nome" onChange={handleChange} required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="exampleFormControlInput1">CNPJ</label>
                                                        <input type="number" name="cnpj" value={novo.cnpj} className="form-control  my-1" id="exampleFormControlInput1" placeholder="Insira um CNPJ" onChange={handleChange} required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="exampleFormControlInput1">E-mail</label>
                                                        <input type="email" name="email" value={novo.email} className="form-control my-1" id="exampleFormControlInput1" placeholder="Insira um email" onChange={handleChange} required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="exampleFormControlInput1">Telefone</label>
                                                        <input type="number" name="telefone" value={novo.telefone} className="form-control my-1" id="exampleFormControlInput1" placeholder="Insira um telefone" onChange={handleChange} required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="exampleFormControlInput1">Endereço</label>
                                                        <input type="text" name="endereco" value={novo.endereco} className="form-control my-1" id="exampleFormControlInput1" placeholder="Insira um endereço" onChange={handleChange} required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="exampleFormControlInput1">Foto</label>
                                                        <input type="text" name="foto" value={novo.foto} className="form-control my-1" id="exampleFormControlInput1" placeholder="Insira uma foto" onChange={handleChange} required />
                                                    </div>
                                                    <div className="text-center mt-4">
                                                        <Button type="submit" variant="success" className="mx-3">Finalizar</Button>
                                                        <Link to="/"><Button className="btn-voltar mx-3">Voltar</Button></Link>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
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