import { NavLink } from "react-router-dom";

const Nav = ({ navContent }) => {
  return (
    <li className="nav-item">
      <NavLink
        to={navContent === "Home" ? "/" : `/${navContent}`}
        end={true}
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        {navContent}
      </NavLink>
    </li>
  );
};

export default Nav;
