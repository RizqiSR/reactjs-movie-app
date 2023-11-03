import NavbarContainer from "./NavbarContainer";
import NavBrand from "./NavBrand";
import NavbarCollapseBtn from "./NavbarCollapseBtn";
import NavList from "./NavList";
import NavSearchInput from "./NavSearchInput";


const Navbar = ({handleSubmitQuery, query, setQuery}) => {
  return (
    <NavbarContainer>
        <NavBrand />
        <NavSearchInput
          handleSubmitQuery={handleSubmitQuery}
          query={query}
          setQuery={setQuery}
        />
        <NavbarCollapseBtn />
        <NavList />
      </NavbarContainer>
  )
}

export default Navbar;