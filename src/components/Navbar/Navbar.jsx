import NavbarContainer from "./NavbarContainer";
import NavBrand from "./NavBrand";
import NavList from "./NavList";
import NavSearchInput from "./NavSearchInput";

const Navbar = ({handleSubmitQuery, query, setQuery}) => {
  return (
    <NavbarContainer>
        <NavBrand />
        <NavList />
        <NavSearchInput
          handleSubmitQuery={handleSubmitQuery}
          query={query}
          setQuery={setQuery}
        />
      </NavbarContainer>
  )
}

export default Navbar;