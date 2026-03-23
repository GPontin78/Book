import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Livro() {

    const { id } = useParams();
    const [livro, setLivro] = useState(null);

    async function buscarLivro() {
        let resposta = await fetch("https://apps-api-livros.ucxocw.easypanel.host/livro");
        let dados = await resposta.json();

        let livroEncontrado = dados.livros.find(function (item) {
            return item.id == id;
        });

        setLivro(livroEncontrado);
    }



    return (
        <div className="container mt-5 livro">
            <div className="row align-items-center">

                <div className="col-md-4 text-center">
                    <img
                        src={livro.imagem}
                        alt={livro.titulo}
                        className="livro-imagem"
                    />
                </div>

                <div className="col-md-8">
                    <h1>{livro.titulo}</h1>
                    <p><strong>Autor:</strong> {livro.autor}</p>
                    <p><strong>Categoria:</strong> {livro.categoria}</p>
                    <p>{livro.descricao}</p>
                </div>

            </div>
        </div>
    );
}