import React from 'react'
import Home from './auth/home/Home';
import QuemSomos from './auth/quem-somos/QuemSomos';
import {Route, Switch } from 'react-router-dom';
import Navbar from './general-components/navbar/Navbar';
import Footer from './general-components/footer/Footer';
import "./App.css";
import Mercados from './auth/mercados/Mercados';
import PutMercados from './auth/mercados/edit-mercados/PutMercados';
import DeleteMercados from './auth/mercados/delete-mercados/DeleteMercados';
import GetProdutosById from './auth/produtos/GetProdutosById';
import PutProduto from './auth/produtos/edit-produto/PutProduto';
import DeleteProduto from './auth/produtos/delete-produto/DeleteProduto';

export default function App(){
    return(
    <>
    <Navbar/>
    <Switch>
        <Route path="/"                       exact component={Home}/>
        <Route path="/home"                         component={Home}/>
        <Route path="/quem-somos"                   component={QuemSomos}/>
        <Route path="/mercado"                      component={Mercados}/>
        <Route path="/editar-mercado/:idMercado"    component={PutMercados}/>
        <Route path="/deletar-mercado/:idMercado"   component={DeleteMercados}/>
        <Route path="/:idMercado/produtos"          component={GetProdutosById}/>
        <Route path="/editar-produto/:idProduto"    component={PutProduto}/>
        <Route path="/deletar-produto/:idProduto"    component={DeleteProduto}/>
    </Switch>
    <Footer/>
    </>
    )
}