import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Home from "./componentes/Home";
import Login from "./componentes/Login";
import Cadastro from "./componentes/Cadastro";
import Catalogo from "./componentes/Catalogo";
import Livro from "./componentes/Livro";
import Erro from "./componentes/Erro";

export default function App() {



    return (

        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/livro/:id" element={<Livro />} />
                <Route path="*" element={<Erro />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}