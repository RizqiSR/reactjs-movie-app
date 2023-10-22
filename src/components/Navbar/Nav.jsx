const Nav = ({ navContent }) => {
  return (
    <li className="nav-item">
      <a
        className={navContent === "Home" ? "nav-link active" : "nav-link"}
        aria-current="page"
        href="#"
      >
        {navContent}
      </a>
    </li>
  );
}

export default Nav;