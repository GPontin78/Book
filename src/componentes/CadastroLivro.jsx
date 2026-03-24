import { useState } from "react";

export default function CadastroLivro() {
    const [imagem, setImagem] = useState('');
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descricao, setDescricao] = useState('');
    const [autor, setAutor] = useState('');
    const [faixaEtaria, setFaixaEtaria] = useState('');
    const [alerta, setAlerta] = useState('');

    async function cadastrarLivro() {
        let token = localStorage.getItem('token');

        if (token) {

            let retorno = await fetch('https://apps-api-livros.ucxocw.easypanel.host/livro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({
                    imagem: imagem,
                    titulo: titulo,
                    categoria: categoria,
                    descricao: descricao,
                    autor: autor,
                    faixa_etaria: faixaEtaria
                })
            });

            retorno = await retorno.json();

            console.log(retorno);
            if (retorno.livro.id) {
                setAlerta('Livro cadastrado com sucesso!');
                setImagem('');
                setTitulo('');
                setCategoria('');
                setDescricao('');
                setAutor('');
                setFaixaEtaria('');
            } else {
                setAlerta('Erro ao cadastrar livro.');
            }

        } else {
            setAlerta('Você precisa estar logado para cadastrar um livro.');
        }
    }

    return (
        <div className="login">
            <div className="login-caixa">
                <h1 className="login-titulo">Cadastrar Livro</h1>
                <p className="login-texto">Preencha os dados do livro</p>

                <div className="login-form">

                    <div className="login-grupo">
                        <label>Imagem</label>
                        <input
                            type="text"
                            value={imagem}
                            onChange={function (e) { setImagem(e.target.value) }}
                        />
                    </div>

                    <div className="login-grupo">
                        <label>Título</label>
                        <input
                            type="text"
                            value={titulo}
                            onChange={function (e) { setTitulo(e.target.value) }}
                        />
                    </div>

                    <div className="login-grupo">
                        <label>Categoria</label>
                        <input
                            type="text"
                            value={categoria}
                            onChange={function (e) { setCategoria(e.target.value) }}
                        />
                    </div>

                    <div className="login-grupo">
                        <label>Descrição</label>
                        <input
                            type="text"
                            value={descricao}
                            onChange={function (e) { setDescricao(e.target.value) }}
                        />
                    </div>

                    <div className="login-grupo">
                        <label>Autor</label>
                        <input
                            type="text"
                            value={autor}
                            onChange={function (e) { setAutor(e.target.value) }}
                        />
                    </div>

                    <div className="login-grupo">
                        <label>Faixa Etária</label>
                        <input
                            type="text"
                            value={faixaEtaria}
                            onChange={function (e) { setFaixaEtaria(e.target.value) }}
                        />
                    </div>

                    <button
                        type="button"
                        className="login-botao"
                        onClick={cadastrarLivro}
                    >
                        Cadastrar
                    </button>
                </div>

                <h3>{alerta}</h3>
            </div>
        </div>
    );
}