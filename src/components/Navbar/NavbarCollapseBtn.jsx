const NavbarCollapseBtn = () => {
  return (
    <button
      className="navbar-toggler border-0 p-0 focus-ring focus-ring-dark"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      style={{height: "37px", width: "37px"}}
    >
      <span className="navbar-toggler-icon fs-6"></span>
    </button>
  );
};

export default NavbarCollapseBtn;
