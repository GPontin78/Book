import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {

    const [livros, setLivros] = useState([]);
    const [busca, setBusca] = useState("");

    async function buscarLivros() {
        let resposta = await fetch("https://apps-api-livros.ucxocw.easypanel.host/livro", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        let dados = await resposta.json();

        setLivros(dados.livros);
    }

    useEffect(function () {
        buscarLivros();
    }, []);

    function handleBuscar(e) {
        setBusca(e.target.value);
    }

    // filtro simples (igual iniciante faria)
    let livrosFiltrados = livros.filter(function (livro) {
        return livro.titulo.toLowerCase().includes(busca.toLowerCase());
    });

    return (
        <header className="bp-header">
            <div className="bp-container">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">

                    {/* LOGO */}
                    <div className="d-flex align-items-center gap-2">
                        <span className="material-symbols-outlined bp-logo-icon">
                            auto_stories
                        </span>
                        <h1 className="bp-logo-text m-0">BOOK PLUS</h1>
                    </div>

                    {/* BUSCA */}
                    <div className="d-none d-md-block flex-grow-1 mx-4">
                        <div className="bp-search-wrapper">
                            <span className="material-symbols-outlined bp-search-icon">
                                search
                            </span>

                            <input
                                type="text"
                                placeholder="Encontre sua próxima leitura..."
                                className="bp-search-input"
                                value={busca}
                                onChange={handleBuscar}
                            />
                        </div>

                        {/* RESULTADOS */}
                        {busca !== "" && (
                            <div>
                                {livrosFiltrados.map(function (livro, index) {
                                    return (
                                        <div key={index}>
                                            <p>{livro.titulo}</p>
                                            <small>{livro.autor}</small>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* MENU */}
                    <div className="d-flex align-items-center gap-3 flex-wrap">
                        <nav className="d-none d-lg-flex bp-nav">
                            <Link to="/">Home</Link>
                            <Link to="/catalogo">Catálogo</Link>
                            <Link to="/cadastro">Cadastro</Link>
                        </nav>

                        <Link to="/login" className="bp-btn-admin">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}