import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Livro() {

    const { id } = useParams();
    const [livro, setLivro] = useState({});

    async function buscarLivro() {

        let resposta = await fetch("https://apps-api-livros.ucxocw.easypanel.host/livro/" + id);
        let dados = await resposta.json();

        if (dados.livro) {
            setLivro(dados.livro);
        } else {
            setLivro(dados);
        }
    }

    useEffect(function () {
        buscarLivro();
    }, []);

    return (
        <div className="livro-container">

            {livro.id ? (
                <div className="livro-box">

                    <img
                        src={livro.imagem}
                        className="livro-img-grande"
                    />

                    <div className="livro-detalhes">
                        <h1>{livro.titulo}</h1>

                        <p><b>Autor:</b> {livro.autor}</p>
                        <p><b>Categoria:</b> {livro.categoria}</p>
                        <p><b>Faixa Etária:</b> {livro.faixa_etaria}</p>

                        <p>{livro.descricao}</p>

                        <Link to="/catalogo">
                            <button className="btn-voltar">
                                Voltar
                            </button>
                        </Link>
                    </div>

                </div>
            ) : (
                <p>Carregando...</p>
            )}

        </div>
    );
}