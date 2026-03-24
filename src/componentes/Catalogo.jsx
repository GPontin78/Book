import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Catalogo() {

    const [livros, setLivros] = useState([]);
    const [busca, setBusca] = useState("");

    async function buscarLivros() {
        let resposta = await fetch("https://apps-api-livros.ucxocw.easypanel.host/livro");
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

        if (busca == "") {
            return true;
        } else {

            if (
                livro.titulo.toLowerCase().indexOf(busca.toLowerCase()) != -1
            ) {
                return true;
            } else if (
                livro.autor.toLowerCase().indexOf(busca.toLowerCase()) != -1
            ) {
                return true;
            } else {
                return false;
            }

        }

    });

    return (
        <div className="catalogo-container">

            <h1 className="catalogo-titulo">Catálogo de Livros</h1>

            <input
                type="text"
                placeholder="Buscar livro..."
                value={busca}
                onChange={Buscar}
                className="catalogo-busca"
            />

            <div className="catalogo-grid">

                {livrosFiltrados.map(function (livro, index) {
                    return (
                        <div key={index} className="catalogo-card">

                            <Link to={"/livro/" + livro.id}>
                                <img
                                    src={livro.imagem}
                                    alt={livro.titulo}
                                    className="catalogo-img"
                                />
                            </Link>

                            <h4 className="catalogo-nome">{livro.titulo}</h4>
                            <p className="catalogo-autor">{livro.autor}</p>

                        </div>
                    );
                })}

            </div>

        </div>
    );
}