
function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <a href="#inicio" className="logo">
          <span className="logo-icon">🥘</span>
          <span>Recetas de mi abuela</span>
        </a>

        <nav className="navbar">
          <a href="#inicio">Inicio</a>
          <a href="#recetas">Recetas</a>
          <a href="#historia">Nuestra historia</a>
        </nav>

      </div>
    </header>
  );
}

export default Header;
