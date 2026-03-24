import { useState, useEffect } from "react";

export default function listaLivros() {

    const [livros, setLivros] = useState([]);
    const [alerta, setAlerta] = useState('');

    async function buscarLivros() {

        let token = localStorage.getItem('token');

        if (token) {

            let resposta = await fetch("https://apps-api-livros.ucxocw.easypanel.host/livro", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            let dados = await resposta.json();

            if (dados.livros) {
                setLivros(dados.livros);
            } else {
                setAlerta('Erro ao buscar livros.');
            }

        } else {
            setAlerta('Você precisa estar logado.');
        }
    }

    useEffect(function () {
        buscarLivros();
    }, []);

    return (
        <div className="login">
            <div className="login-caixa">
                <h1 className="login-titulo">Lista de Livros</h1>
                <p className="login-texto">Veja os livros cadastrados</p>

                <div className="login-form">

                    {livros.length > 0 ? (
                        <div className="lista-grid">

                            {livros.map(function (livro, i) {
                                return (
                                    <div key={i} className="livro-card">

                                        <img
                                            src={livro.imagem}
                                            alt={livro.titulo}
                                            className="livro-img"
                                        />

                                        <h3 className="livro-titulo">
                                            {livro.titulo}
                                        </h3>

                                        <p className="livro-info">
                                            {livro.autor}
                                        </p>

                                        <p className="livro-info">
                                            {livro.categoria}
                                        </p>

                                        <div className="livro-botoes">
                                            <button type="button" className="btn-editar">
                                                Editar
                                            </button>

                                            <button type="button" className="btn-excluir">
                                                Excluir
                                            </button>
                                        </div>

                                    </div>
                                );
                            })}

                        </div>
                    ) : (
                        <p>Nenhum livro encontrado.</p>
                    )}

                </div>

                <h3>{alerta}</h3>
            </div>
        </div>
    );
}