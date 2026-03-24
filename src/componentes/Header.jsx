import { Link } from "react-router-dom";
export default function Header() {
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


                    <div className="d-flex align-items-center gap-3 flex-wrap">
                        <nav className="d-none d-lg-flex bp-nav">
                            <Link to="/">Home</Link>
                            <Link to="/catalogo">Catálogo</Link>
                            <Link to="/cadastro">Cadastro</Link>
                            <Link to="/cadastroLivro">Cadastrar Livro</Link>
                            <Link to="/listaLivro">Lista Livro</Link>
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