import { Nav } from "./Nav";

export const NavList = ({ navContents }) => {
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