import "./Header.css";

function Header() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title display-1 fw-bold">
            Agency Tested Apparel
          </h1>
          <h2 className="hero-subtitle">Discover the latest fashion trends</h2>
          <div className="btn-group border border-dark rounded" role="group">
            <button type="button" className="btn btn-light">
              Colllections
            </button>
            <button type="button" className="btn btn-light">
              Shop
            </button>
          </div>
        </div>

        <div className="hero-background">
          <p className="p-3">
            <a href="test.html" className="link-dark" target="_blank">
              <h2 className="">
                <span className="fw-bold">Sid</span> Store
              </h2>
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Header;
