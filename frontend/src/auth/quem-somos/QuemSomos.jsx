import Aos from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";
import { arthur, everton, henrique, luiz, mangini } from "../../general-components/photos/Photos";
import { QuemSomosStyled } from "./QuemSomosStyled";

export default function QuemSomos() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <>
            <QuemSomosStyled>
                <div className="container">
                    <div className="justify-content-center">
                        <div className="flex-column">
                            <div className="margem" data-aos="fade-right">
                                <h3 className="text-center titulo">Nossa Equipe</h3>
                                <div className="col-md-12">
                                    <div className="d-flex flex-wrap justify-content-center">
                                        <div className="card">
                                            <img
                                                className="card-img"
                                                src={arthur}
                                                alt="foto do arthur"
                                            />
                                            <h5 className="card-informacao py-2">Arthur Silva</h5>
                                            <h6 className="card-informacao">RM 88391</h6>
                                        </div>
                                        <div className="card">
                                            <img
                                                className="card-img"
                                                src={everton}
                                                alt="foto do everton"
                                            />
                                            <h5 className="card-informacao py-2">Everton de Souza</h5>
                                            <h6 className="card-informacao">RM 88475</h6>
                                        </div>
                                        <div className="card">
                                            <img
                                                className="card-img"
                                                src={mangini}
                                                alt="foto do gustavo"
                                            />
                                            <h5 className="card-informacao py-2">Gustavo Mangini</h5>
                                            <h6 className="card-informacao">RM 88955</h6>
                                        </div>
                                        <div className="card">
                                            <img
                                                className="card-img"
                                                src={henrique}
                                                alt="foto do henrique"
                                            />
                                            <h5 className="card-informacao py-2">Henrique Shoji</h5>
                                            <h6 className="card-informacao">RM 88983</h6>
                                        </div>
                                        <div className="card">
                                            <img
                                                className="card-img"
                                                src={luiz}
                                                alt="foto do luiz"
                                            />
                                            <h5 className="card-informacao py-2">Luiz Antonio</h5>
                                            <h6 className="card-informacao">RM 87667</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </QuemSomosStyled>
        </>
    )
}