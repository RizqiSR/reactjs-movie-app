import Navbar from "../components/Navbar/Navbar";
import NavBrand from "../components/Navbar/NavBrand";
import NavList from "../components/Navbar/NavList";
import NavSearchInput from "../components/Navbar/NavSearchInput";
import Header from "../components/Header/Header";

const About = () => {
  return (
    <>
      <Navbar>
        <NavBrand />
        <NavList />
        <NavSearchInput />
      </Navbar>
      <Header />
    </>
  );
};

export default About;
