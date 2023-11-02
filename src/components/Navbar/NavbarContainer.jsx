const NavbarContainer = ({ children }) => {
  return (
    <nav className="navbar navbar-expand-lg shadow-lg fixed-top px-2 py-3">
      <div className="container-fluid">
        {children}
      </div>
    </nav>
  );
}

export default NavbarContainer;