import { backdropsURL } from "../../utils/fetchDataAPI";

const Header = ({ children, movieDetails }) => {
  const headerStyle = {
    backgroundImage: "",
    backgroundSize: "cover",
    // height: "",
    backgroundPosition: "right -13em top 9px",
  };

  let headerBlur = {
    backdropFilter: "blur(25px)",
    mask: "linear-gradient(to bottom, rgb(41, 41, 41) 62.5%, rgb(41, 41, 41) 75%, rgb(41, 41, 41) 87.5%, rgb(41, 41, 41) 100%)",
  };

  let headerOverlayStyle = {
    background:
      "linear-gradient(to right,  rgb(30, 30, 30), rgba(52, 52, 52, .7))",
    marginLeft: "0",
    width: "100%",
  };

  if (movieDetails) {
    headerStyle.backgroundImage = `url('${backdropsURL}${movieDetails.backdrop_path}')`;
    // headerStyle.height = "fit-content";
    headerBlur = {
      position: "relative",
      top: "0",
      left: "0",
      width: "20%",
      backdropFilter: "blur(25px)",
      mask: "linear-gradient(to bottom, rgb(41, 41, 41) 62.5%, rgb(41, 41, 41) 75%, rgb(41, 41, 41) 87.5%, rgb(41, 41, 41) 100%)",
    };

    headerOverlayStyle = {
      background:
        "linear-gradient(to right,  rgb(30, 30, 30), rgba(52, 52, 52, .7))",
      margin: "0",
      padding: "30px",
    };

  } else {
    headerStyle.backgroundImage = `url('./img/bumi.jpg')`;
    headerStyle.height = "fit-content";
  }

  return (
    <div className="header-container pt-5">
      <div
        className="header-image-wrapper header-wrapper"
        style={headerStyle}
      >
        <div className="header-blur" style={headerBlur}></div>
        <div
          className="header-overlay text-white align-items-start d-flex"
          style={headerOverlayStyle}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Header;
