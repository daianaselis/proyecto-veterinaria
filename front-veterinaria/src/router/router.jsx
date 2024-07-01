import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Header from "../components/header/header";
import ErrorBound from "../components/errorBound/errorBound";
import Clientes from "../pages/clientes/clientes";
import Formulario from "../pages/clientes/formulario";
import Mascotas from "../pages/mascotas/mascotas";
import FormularioMascotas from "../pages/mascotas/formularioMascotas";

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <ErrorBound>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />

                    <Route path="/clientes"element={<Clientes/>}/>
                    <Route path="/clientes/formulario"element={<Formulario/>}/>
                    <Route path="/clientes/formulario/:id_cliente"element={<Formulario/>}/>

                    <Route path="/mascotas" element={<Mascotas/>}/>
                    <Route path="/mascotas/formulario"element={<FormularioMascotas/>}/>
                    <Route path="/mascotas/formulario/:id_mascota"element={<FormularioMascotas/>}/>
                    
                    <Route path="" element=""/>
                </Routes>
            </ErrorBound>

        </BrowserRouter>
    )
}

export default Router;