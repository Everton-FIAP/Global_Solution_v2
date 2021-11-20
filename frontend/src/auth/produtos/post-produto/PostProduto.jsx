import "aos/dist/aos.css";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { ProdutoStyled } from "../ProdutoStyled";
import { ImPlus as Plus } from "react-icons/im";

export default function PostProduto(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [novo, setNovo] = useState({
        idProduto: null,
        nome: "",
        validade: "",
        quantidade: "",
        foto: "",
        observacao: "",
        idMercado: null
    })


    let metodo = "POST"

    const handleSubmit = e => {
        e.preventDefault()
        fetch('/rest/produto', {
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novo)
        }).then(() => {
            window.location.reload()
        })
    }

    const handleChange = e => {
        setNovo({ ...novo, [e.target.name]: e.target.value })
    }

    return (
        <>
            <ProdutoStyled>
                <Button className="btn-post" onClick={handleShow}><Plus /></Button>
                <Modal show={show} onHide={handleClose} animation={true} backdrop={false} size='md' data-aos="fade-in">
                    <Modal.Body>
                        <div className="flex-column">
                            <div className="col-md-12 col-lg-12 col-sm-12">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Nome</label>
                                        <input type="text" value={novo.nome} name="nome" className="form-control my-2" id="exampleFormControlInput1" placeholder="Insira um nome" onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Quantidade</label>
                                        <input type="number" value={novo.quantidade} name="quantidade" className="form-control my-2" id="exampleFormControlInput1" placeholder="Insira a quantidade" onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Data de Validade</label>
                                        <input type="date" value={novo.validade} name="validade" className="form-control my-2" id="exampleFormControlInput1" placeholder="Insira a data de validade" onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Foto</label>
                                        <input type="text" value={novo.foto} name="foto" className="form-control my-2" id="exampleFormControlInput1" placeholder="Insira uma foto" onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Observacao</label>
                                        <textarea type="text" value={novo.observacao} name="observacao" className="form-control my-2" id="exampleFormControlInput1" placeholder="Insira uma observacao" onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">ID Mercado</label>
                                        <input type="number" value={novo.idMercado} name="idMercado" className="form-control my-2" id="exampleFormControlInput1" placeholder="Insira uma observacao" onChange={handleChange} />
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
            </ProdutoStyled>
        </>
    )
};