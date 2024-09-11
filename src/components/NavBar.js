import planet from 
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <image src={planet} alt="planet-logo" />
          <h1>Space Traveler`s Hub</h1>
        </div>
        <nav className="nav-right">
          <ul className="nav-links"></ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;