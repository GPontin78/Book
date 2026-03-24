import { useState, useEffect } from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [alerta, setAlerta] = useState('');

    async function realizarLogin() {
        let retorno = await fetch('https://apps-api-livros.ucxocw.easypanel.host/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                senha: senha,
            })
        });

        retorno = await retorno.json();

        console.log(retorno);

        if (retorno.token) {
            setAlerta('Login realizado com sucesso');

            localStorage.setItem('token', retorno.token);
            localStorage.setItem('usuario_nome', retorno.usuario.nome);
            localStorage.setItem('usuario_email', retorno.usuario.email);
            localStorage.setItem('usuario_id', retorno.usuario.id);

        } else {
            setAlerta('E-mail ou senha estão incorretos.');
        }
    }

    useEffect(function () {
        let token = localStorage.getItem('token');

        if (token) {
            let nome = localStorage.getItem('usuario_nome');
            setAlerta('Olá, ' + nome + ' você já está logado.');
        }
    }, []);

    return (
        <div className="login">
            <div className="login-caixa">
                <h1 className="login-titulo">Login</h1>
                <p className="login-texto">Entre com seu email e senha</p>

                <div className="login-form">
                    <div className="login-grupo">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={function (e) { setEmail(e.target.value) }}
                        />
                    </div>

                    <div className="login-grupo">
                        <label>Senha</label>
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={function (e) { setSenha(e.target.value) }}
                        />
                    </div>

                    <button
                        type="button"
                        className="login-botao"
                        onClick={realizarLogin}
                    >
                        Entrar
                    </button>
                </div>

                <h3>{alerta}</h3>
            </div>
        </div>
    );
}