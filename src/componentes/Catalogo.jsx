import { Link } from "react-router-dom";

export default function Catalogo() {
    return (
        <div className="container mt-5 catalogo">

            <h1 className="catalogo-titulo">Catálogo de Livros</h1>

            <div className="row mt-4">



                {/* Livro 2 */}
                <div className="col-md-3 text-center catalogo-card">
                    <Link to="/livro">
                        <img
                            src="https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg"
                            alt="1984"
                            className="catalogo-imagem"
                        />
                    </Link>
                    <p className="catalogo-categoria">Ficção</p>
                    <h5>1984</h5>
                    <p className="catalogo-autor">George Orwell</p>
                </div>

                {/* Livro 3 */}
                <div className="col-md-3 text-center catalogo-card">
                    <Link to="/livro">
                        <img
                            src="https://m.media-amazon.com/images/I/81af+MCATTL.jpg"
                            alt="Pequeno Príncipe"
                            className="catalogo-imagem"
                        />
                    </Link>
                    <p className="catalogo-categoria">Infantil</p>
                    <h5>O Pequeno Príncipe</h5>
                    <p className="catalogo-autor">Antoine de Saint-Exupéry</p>
                </div>

                {/* Livro 4 */}
                <div className="col-md-3 text-center catalogo-card">
                    <Link to="/livro">
                        <img
                            src="https://m.media-amazon.com/images/I/81iqZ2HHD-L.jpg"
                            alt="Harry Potter"
                            className="catalogo-imagem"
                        />
                    </Link>
                    <p className="catalogo-categoria">Fantasia</p>
                    <h5>Harry Potter</h5>
                    <p className="catalogo-autor">J.K. Rowling</p>
                </div>

            </div>

        </div>
    );
}