export default function Livro() {
    return (
        <div className="container mt-5 livro">

            <div className="row align-items-center">

                {/* IMAGEM DO LIVRO */}
                <div className="col-md-4 text-center">
                    <img
                        src="https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg"
                        alt="1984"
                        className="livro-imagem"
                    />
                </div>

                {/* INFORMAÇÕES */}
                <div className="col-md-8">

                    <h1 className="livro-titulo">1984</h1>

                    <p className="livro-autor">
                        <strong>Autor:</strong> George Orwell
                    </p>

                    <p className="livro-categoria">
                        <strong>Categoria:</strong> Ficção / Distopia
                    </p>

                    <p className="livro-descricao">
                        O romance "1984", de George Orwell, apresenta uma sociedade
                        totalitária controlada pelo governo e pelo "Grande Irmão".
                        A história acompanha Winston Smith, um homem que começa a
                        questionar o sistema opressor em que vive. O livro aborda
                        temas como vigilância, manipulação da informação e perda
                        da liberdade individual.
                    </p>

                </div>

            </div>

        </div>
    );
}