import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { PostMercadoStyled } from "../MercadoStyle";
import "aos/dist/aos.css";

export default function PostMercados() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const handleChange = e => {
        setNovo({ ...novo, [e.target.name]: e.target.value })
    }

    const [novo, setNovo] = useState({
        idMercado: null,
        nome: "",
        cnpj: "",
        endereco: "",
        telefone: "",
        email: "",
        foto: "",
        idRede: 1 //colocar aqui um props ou algo para pegar o id da rede da tela home
    })

    let metodo = "POST"

    const handleSubmit = e => {
        e.preventDefault()
        fetch("/rest/mercado", {
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novo)
        }).then(() => {
            window.location.reload()
        })
    }   

    return (
        <>
            <PostMercadoStyled>
                <Button variant="primary" onClick={handleShow}>
                    Novo Mercado
                </Button>
                <Modal show={show} onHide={handleClose} animation={true} backdrop={false} size='md' data-aos="fade-in">
                    <Modal.Body>
                        <div className="flex-column">
                            <div className="col-md-12 col-lg-12 col-sm-12">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Nome</label>
                                        <input type="text" value={novo.nome}  name="nome" className="form-control my-2" id="exampleFormControlInput1" placeholder="Insira um nome" onChange={handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">CNPJ</label>
                                        <input type="number" value={novo.cnpj} name="cnpj"  className="form-control my-2" id="exampleFormControlInput1" placeholder="Insira um CNPJ" onChange={handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">E-mail</label>
                                        <input type="text" value={novo.email} name="email" className="form-control my-2" id="exampleFormControlInput1" placeholder="Insira um email" onChange={handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Telefone</label>
                                        <input type="number" value={novo.telefone} name="telefone" className="form-control my-2" id="exampleFormControlInput1" placeholder="Insira um telefone" onChange={handleChange}/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="validationTextarea">Endereço</label>
                                        <input type="text" value={novo.endereco} name="endereco" className="form-control my-2" id="exampleFormControlInput1" placeholder="Insira um endereço" onChange={handleChange}/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="validationTextarea">Foto</label>
                                        <input type="text" value={novo.foto} name="foto" className="form-control my-2" id="exampleFormControlInput1" placeholder="Insira uma foto" onChange={handleChange}/>
                                    </div>
                                    <div className="d-flex justify-content-end mt-5">
                                        <button type="submit" className="btn btn-success mx-2">
                                            Finalizar
                                        </button>
                                        <Button className="ms-2" variant="secondary" onClick={handleClose}>
                                            Voltar
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </PostMercadoStyled>
        </>
    )
};