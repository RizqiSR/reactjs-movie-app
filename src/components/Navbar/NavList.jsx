import Nav from "./Nav";

const navContents = ["Home", "Movies", "TV Shows", "More", "About"];

const NavList = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {navContents.map((navContent) => (
          <Nav navContent={navContent} key={navContent} />
        ))}
      </ul>
    </div>
  );
}

export default NavList