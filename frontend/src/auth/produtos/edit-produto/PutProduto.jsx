import React, { useState, useEffect } from "react";
import { ProdutoStyled } from "../ProdutoStyled";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PutProduto(props) {
    let idProduto = null
    if (props.match.path.toLowerCase().includes('editar-produto')) {
        idProduto = props.match.params.idProduto
    }

    const [novo, setNovo] = useState({
        idProduto: idProduto,
        nome: "",
        validade: "",
        quantidade: "",
        foto: "",
        observacao: "",
        idMercado: ""
    })

    let metodo = 'PUT';


    const handleChange = (e) => {
        setNovo({ ...novo, [e.target.name]: e.target.value });
    }

    const [produto, setProdutos] = useState([])

    useEffect(() => {
        if (idProduto) {
            fetch('/rest/produto/' + idProduto).then((resp) => {
                return (resp.json())
            }).then((data) => {
                setProdutos(data)
                console.table(data)
            }).catch((err) => {
                console.error(err)
            })
        }
    }, [idProduto])

    useEffect(() => {
        if (idProduto) {
            fetch('/rest/produto/' + idProduto).then(resp => {
                return (resp.json())
            }).then(data => {
                setNovo(data)
            })
        }
    }, [idProduto])


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/rest/produto/' + idProduto, {
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
            <ProdutoStyled>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="py-3 titulo text-center" data-aos="fade-in">
                            <h4><b>Editar produto</b></h4>
                        </div>
                        <div className="col-md-12">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-md-4">
                                    <div className="d-flex flex-wrap justify-content-center">
                                        <div className="card mb-5" data-aos="fade-in">
                                            <img className="card-img" src={produto.foto} alt="foto chocolate" />
                                            <form onSubmit={handleSubmit}>
                                                <div className="card-informacao">
                                                    <div className="form-group">
                                                        <input type="text" name="foto" value={novo.foto} className="form-control my-1" id="exampleFormControlInput1" placeholder="Insira uma foto" onChange={handleChange} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="exampleFormControlInput1">ID</label>
                                                        <input type="number" name="idProduto" value={novo.idProduto} className="form-control my-1" id="exampleFormControlInput1" placeholder="Insira um id" onChange={handleChange} disabled />
                                                    </div>
                                                    <div className="form-group" >
                                                        <label for="exampleFormControlInput1">Nome</label>
                                                        <input type="text" name="nome" value={novo.nome} className="form-control my-1" id="exampleFormControlInput1" placeholder="Insira um nome" onChange={handleChange} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="exampleFormControlInput1">Quantidade</label>
                                                        <input type="number" name="quantidade" value={novo.quantidade} className="form-control my-1" id="exampleFormControlInput1" placeholder="Insira a quantidade" onChange={handleChange} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="exampleFormControlInput1">Data de Validade</label>
                                                        <input type="date" name="validade" value={novo.validade} className="form-control my-1" id="exampleFormControlInput1" placeholder="Insira a data de validade" onChange={handleChange} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="exampleFormControlInput1">Observacao</label>
                                                        <textarea type="text" name="observacao" value={novo.observacao} className="form-control my-1" id="exampleFormControlInput1" placeholder="Insira uma descricao" onChange={handleChange} />
                                                    </div>
                                                    <div className="text-center mt-3">
                                                        <Button type="submit" variant="success" className="mx-3">Finalizar</Button>
                                                        <Link to="/mercado"><Button className="btn-voltar mx-3" variant="mx-3">Voltar</Button></Link>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ProdutoStyled>
        </>
    )
}