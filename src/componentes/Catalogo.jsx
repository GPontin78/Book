import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Catalogo() {

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

    function Buscar(e) {
        setBusca(e.target.value);
    }

    let livrosFiltrados = livros.filter(function (livro) {
        return (
            livro.titulo.toLowerCase().includes(busca.toLowerCase()) ||
            livro.autor.toLowerCase().includes(busca.toLowerCase())
        );
    });

    return (
        <div className="container mt-5 catalogo">

            <h1 className="catalogo-titulo">Catálogo de Livros</h1>

            {/* CAMPO DE BUSCA */}
            <input
                type="text"
                placeholder="Buscar livro..."
                value={busca}
                onChange={Buscar}
                className="form-control mt-3"
            />

            <div className="row mt-4">

                {livrosFiltrados.map(function (livro, index) {
                    return (
                        <div key={index} className="col-md-3 text-center catalogo-card">

                            <Link to={`/livro/${livro.id}`}>
                                <img
                                    src={livro.imagem}
                                    alt={livro.titulo}
                                    className="catalogo-imagem"
                                />
                            </Link>

                            <p className="catalogo-categoria">{livro.categoria}</p>
                            <h5>{livro.titulo}</h5>
                            <p className="catalogo-autor">{livro.autor}</p>

                        </div>
                    );
                })}

            </div>

        </div>
    );
}