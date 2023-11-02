import Nav from "./Nav";

const navContents = ["Home", "Movies", "More", "About"];

const NavList = () => {
  return (
    <div className="collapse navbar-collapse ms-lg-5" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mt-3 my-lg-0">
        {navContents.map((navContent) => (
          <Nav navContent={navContent} key={navContent} />
        ))}
      </ul>
    </div>
  );
};

export default NavList;