import { Link } from "react-router-dom";

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to="/">
    <Img src="../Imgs/descarga.png"></Img>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Descuentos">Descuentos</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="Camisetas">Camisetas</Link></li>
            <li><Link className="dropdown-item" to="Chaquetas">Chaquetas</Link></li>
            <li><Link className="dropdown-item" to="jeans">jeans</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

export default Navbar