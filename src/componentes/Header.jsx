import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bp-header">
            <div className="bp-container">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <div className="d-flex align-items-center gap-2">
            <span className="material-symbols-outlined bp-logo-icon">
              auto_stories
            </span>
                        <h1 className="bp-logo-text m-0">BOOK PLUS</h1>
                    </div>

                    <div className="d-none d-md-block flex-grow-1 mx-4">
                        <div className="bp-search-wrapper">
              <span className="material-symbols-outlined bp-search-icon">
                search
              </span>

                            <input
                                type="text"
                                placeholder="Encontre sua próxima leitura..."
                                className="bp-search-input"
                            />
                        </div>
                    </div>

                    <div className="d-flex align-items-center gap-3 flex-wrap">
                        <nav className="d-none d-lg-flex bp-nav">
                            <Link to="/">Home</Link>
                            
                            <Link to="/cadastro">Cadastro</Link>
                        </nav>

                        <Link to="/login" className="bp-btn-admin">
                            Login Admin
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}