export default function Hero() {
    return (
        <section className="bp-hero">

            <img
                className="bp-hero-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfmiFAGbUFa0lTX5XasEEjKiwcVkFbXwoEzo8yCgHVgq5hSkEWsYsWYOg8XwwZG72fhd7h5b0P1i7pYf9ph9jcJtRuconesMJPn1GnHSu902LHK6AQr8xb4F53ylLXhqFiXedW-nVmENvmAhiDX_Rwr_BBDIwZalBQRqo5rr0zUZ4UxTKCejP__dfAxIbSNd5NN7vExip_mU0Wz4cn8zDRHWV7LfSXJXjVWl721PPNvh1jpRMdZPY5fgIBc5IV36Tjipxv60FkQVUv"
                alt=""
            />

            <div className="bp-hero-overlay" />

            <div className="container-xl bp-hero-content">

        <span className="bp-hero-badge">
          Curadoria Exclusiva
        </span>

                <h2 className="bp-hero-title">
                    Descubra seu <br />
                    <span>próximo capítulo.</span>
                </h2>

                <p className="bp-hero-text">
                    Mergulhe em histórias que transformam. Explore nossa seleção premium de obras clássicas e contemporâneas.
                </p>

                <div className="d-flex gap-3">
                    <a href="#catalogo" className="bp-btn-main">
                        Explorar Catálogo
                    </a>

                    <a href="#" className="bp-btn-outline">
                        Ver Promoções
                    </a>
                </div>

            </div>

        </section>
    )
}