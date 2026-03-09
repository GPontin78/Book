export default function Login() {
    return (
        <div className="login">
            <div className="login-caixa">
                <h1 className="login-titulo">Login</h1>
                <p className="login-texto">Entre com seu email e senha</p>

                <form className="login-form">
                    <div className="login-grupo">
                        <label>Email</label>
                        <input type="email" placeholder="Digite seu email" />
                    </div>

                    <div className="login-grupo">
                        <label>Senha</label>
                        <input type="password" placeholder="Digite sua senha" />
                    </div>

                    <button type="submit" className="login-botao">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}