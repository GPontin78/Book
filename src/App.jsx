import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import Footer from "./componentes/Footer";
import Login from "./componentes/Login";
import Cadastro from "./componentes/Cadastro";

function Home() {
    return <Hero />;
}

export default function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}