export default function Footer() {
    return (
        <footer className="bp-footer">

            <div className="container-xl">

                <div className="bp-footer-top">

                    <div className="bp-footer-brand">
                        <div className="bp-footer-logo">
                            <span className="material-symbols-outlined">auto_stories</span>
                            <span>BOOK PLUS</span>
                        </div>

                        <p>
                            Sua livraria digital de confiança. Uma curadoria minimalista das obras mais impactantes para o seu crescimento.
                        </p>

                        <div className="bp-footer-social">
                            <a href="#"><span className="material-symbols-outlined">share</span></a>
                            <a href="#"><span className="material-symbols-outlined">favorite</span></a>
                        </div>
                    </div>

                    <div className="bp-footer-links">

                        <div>
                            <h4>Explorar</h4>
                            <a href="#">Lançamentos</a>
                            <a href="#">Mais Vendidos</a>
                            <a href="#">E-books</a>
                        </div>

                        <div>
                            <h4>Suporte</h4>
                            <a href="#">Ajuda</a>
                            <a href="#">Envios</a>
                            <a href="#">Trocas</a>
                        </div>

                        <div>
                            <h4>Institucional</h4>
                            <a href="#">Sobre Nós</a>
                            <a href="#">Contato</a>
                            <a href="#">Privacidade</a>
                        </div>

                    </div>

                </div>

                <div className="bp-footer-bottom">
                    <span>© 2024 Book Plus. Todos os direitos reservados.</span>

                    <div>
                        <span>Desenvolvido com</span>
                        <span className="material-symbols-outlined text-danger">favorite</span>
                        <span>em SENAI</span>
                    </div>
                </div>

            </div>

        </footer>
    )
}