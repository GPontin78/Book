export default function Cadastro() {
    return (
        <div className="cadastro">
            <div className="cadastro-caixa">
                <h1 className="cadastro-titulo">Cadastro</h1>
                <p className="cadastro-texto">Crie sua conta para continuar</p>

                <form className="cadastro-form">
                    <div className="cadastro-grupo">
                        <label>Nome</label>
                        <input type="text" placeholder="Digite seu nome" />
                    </div>

                    <div className="cadastro-grupo">
                        <label>Email</label>
                        <input type="email" placeholder="Digite seu email" />
                    </div>

                    <div className="cadastro-grupo">
                        <label>Senha</label>
                        <input type="password" placeholder="Digite sua senha" />
                    </div>

                    <button type="submit" className="cadastro-botao">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}