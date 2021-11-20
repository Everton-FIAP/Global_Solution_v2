import "aos/dist/aos.css";
import React from "react";
import { HomeStyled } from "./HomeStyled";
import { Carousel } from "react-bootstrap";
import { caminhao, cestas, criancaEscola, criancafeliz, estoque, ods2, onu, planeta, time } from "../../general-components/photos/Photos";

export default function Home() {
    return (
        <>
            <HomeStyled>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <h3 className="my-5 titulo"><b>Seja muito Bem Vindo ao Compartir!</b></h3>
                        <div className="col-md-12 margem" data-aos="fade-left">
                            <div className="row">
                                <div className="col-md-12 margem" data-aos="fade-left">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-6 col-sm-6 d-flex flex-wrap justify-content-center my-5">
                                            <Carousel className="fotoSize">
                                                <Carousel.Item>
                                                    <img src={ods2} alt="foto do objetivo ODS" className="fotoSize" />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img src={onu} alt="foto da ONU" className="fotoSize" />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img src={planeta} alt="foto mãos segurando planeta" className="fotoSize" />
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-sm-6 d-flex flex-wrap align-items-center text-center p-5 my-5">
                                            <div className="flex-column">
                                                <h5 className="titulo"><b>ODS 2030</b></h5>
                                                <p>Não pode haver desenvolvimento sustentável, prosperidade ou paz sem equidade – oportunidades justas para cada criança e cada adolescente. Se as crianças e os adolescentes mais desfavorecidos não compartilham desse progresso, ele não será sustentável.
                                                A nova agenda tem o potencial de definir o desenvolvimento global em um caminho mais equitativo. Ela dá a oportunidade de se oferecer a todas as crianças e todos os adolescentes as ferramentas, as habilidades e os serviços de que necessitam para sobreviver, 
                                                prosperar e percorrer a maior parte de sua vida.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 margem" data-aos="fade-right">
                            <div className="row">
                                <div className="col-md-6 col-lg-6 col-sm-6 d-flex  flex-wrap align-items-center text-center p-5">
                                    <div className="flex-column">
                                        <h5 className="titulo"><b>Quem somos!</b></h5>
                                        <p className="text-justified">Somos um grupo de jovens desenvolvedores que tomou a iniciativa de procurar a melhor forma de ligar dois pontos: Fome e Desperdício de alimento.
                                                Partimos da ideia de desenvolver um site onde tonrará possível a união entre quem está procurando por alimento e mercados que possam fornecer alimentos antes do vencimento para que não haja o desperdício desnecessário.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-lg-6 d-flex flex-wrap justify-content-center m-0">
                                    <Carousel className="fotoSize">
                                        <Carousel.Item>
                                            <img src={estoque} alt="foto de estoque" className="fotoSize" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={criancafeliz} alt="foto da crianca feliz" className="fotoSize" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={time} alt="foto do time" className="fotoSize" />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-12 col-sm-12 margem" data-aos="fade-left">
                            <div className="row">
                                <div className="col-md-12 margem" data-aos="fade-left">
                                    <div className="row">
                                        <div className="col-md-6 d-flex flex-wrap justify-content-center my-5">
                                            <Carousel className="fotoSize">
                                                <Carousel.Item>
                                                    <img src={cestas} alt="foto do homem no lixo" className="fotoSize" />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img src={caminhao} alt="foto do caminhao" className="fotoSize" />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img src={criancaEscola} alt="foto da crianca" className="fotoSize" />
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                        <div className="col-md-6 d-flex flex-wrap align-items-center text-center p-5 my-5">
                                            <div className="flex-column">
                                                <h5 className="titulo"><b>Nossa Proposta</b></h5>
                                                <p>"Caridade é ajudar ao próximo com o intuito de fazer a diferença e melhorar o mundo." Nos baseando nessa frase, temos a meta de conseguir atingir o maior número de ONGs possível para que nossa rede ajude-os a encontrar com maior facilidade 
                                                alimentos mais baratos ou até mesmo grátis forncecidos pelos mercados. Os mercados participantes devem cadastrar apenas produtos com uma distância relevante da data de vencimento para que possamos assim disponibilizarmos em nossas plataformato
                                                produtos pereciveis adequados para a alimentação, de forma que os mercados evitem o disperdicio desses alimentos que sempre vão parar nos lixos. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </HomeStyled>
        </>
    )
}