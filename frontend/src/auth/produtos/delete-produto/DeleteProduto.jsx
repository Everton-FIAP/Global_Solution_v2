import React, { useState, useEffect } from "react";
import { ProdutoStyled } from "../ProdutoStyled";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function DeleteProduto(props) {

    let idProduto = props.match.path.toLowerCase().includes('deletar-produto') ? props.match.params.idProduto : null
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

    const handleDelete = (idProduto) => {
        fetch("/rest/produto/" + idProduto, {
            method: 'DELETE',
        }).then(() => {
            window.location.reload()
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            <ProdutoStyled>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="py-3 titulo text-center" data-aos="fade-in">
                            <h4><b>Deseja deletar esse Produto?</b></h4>
                            <div className="text-center mt-3">
                                <Link to="/mercado"><Button variant="danger" className="mx-3" onClick={handleDelete.bind(this, produto.idProduto)}>Deletar</Button></Link>
                                <Link to="/mercado"><Button className="btn-voltar mx-3" variant="mx-3">Voltar</Button></Link>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-md-4">
                                    <div className="d-flex flex-wrap justify-content-center">
                                        <div className="card mb-5" data-aos="fade-in">
                                            <img className="card-img" src={produto.foto} alt="foto do Produto" />
                                            <div className="card-informacao">
                                                <ul className="ps-0">
                                                    <li className="d-flex align-items-center">
                                                        <p>Nome: <b className="mx-1">{produto.nome}</b></p>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <p>Quantidade: <b className="mx-1">{produto.quantidade}</b></p>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <p>Validade: <b className="mx-1">{produto.validade}</b></p>
                                                    </li>
                                                </ul>
                                            </div>
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