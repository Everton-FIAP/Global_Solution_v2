import React, { useState, useEffect } from "react";
import { ProdutoStyled } from "./ProdutoStyled";
import PostProduto from "./post-produto/PostProduto";
import { Link } from "react-router-dom";
import { TiDelete as Delete } from "react-icons/ti";
import { AiOutlineEdit as Edit } from "react-icons/ai";

export default function GetProdutosById(props) {
    let idMercado = props.match.path.toLowerCase().includes('produtos') ? props.match.params.idMercado: null

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        if(idMercado){
            fetch('/rest/mercado/'+ idMercado +'/produtos').then((resp) => {
                return(resp.json())
            }).then((data) => {
                setProdutos(data)
                console.table(data)
            }).catch((err) => {
                console.error(err)
            })
        }
    }, [idMercado])

    return (
        <>
            <ProdutoStyled>
                <div className="container">
                    <div>
                        <div className="col-md-12">
                            <div className="row align-items-center">
                                {produtos.map((produto) => (
                                    <div className="col-md-4">
                                        <div className="d-flex flex-wrap justify-content-center">
                                            <div className="card my-5" data-aos="fade-in">
                                                <img className="card-img" src={produto.foto} alt="foto chocolate" />
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
                                                        <li className="d-flex align-items-center">
                                                            <p>Observacao: <b className="mx-1">{produto.observacao}</b></p>
                                                        </li>
                                                    </ul>
                                                    <hr />
                                                    <div className="d-flex justify-content-center align-items-center icone">
                                                        <Link to={`/editar-produto/${produto.idProduto}`} ><Edit id="icon-edit" className="mx-2" /></Link>
                                                        <Link to={`/deletar-produto/${produto.idProduto}`}><Delete id="icon-delete" className="mx-2" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="col-md-3 margem" data-aos="fade-in">
                                    <PostProduto/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ProdutoStyled>
        </>
    )
}