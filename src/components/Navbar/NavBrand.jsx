import { Link } from "react-router-dom";

const NavBrand = () => {
  return (
    <Link className="navbar-brand text-info me-lg-5 ms-lg-2" to="/">
      Movie App
    </Link>
  );
}

export default NavBrand;