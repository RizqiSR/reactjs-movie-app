import { backdropsURL } from "../../utils/fetchDataAPI";

const Header = ({ children, movieDetails }) => {
  const headerStyle = {
    backgroundImage: "",
    backgroundSize: "cover",
    height: "",
    backgroundPosition: "right -13em top 9px",
  };

  let headerBlur = {};

  let headerOverlayStyle = {};

  if (movieDetails) {
    headerStyle.backgroundImage = `url('${backdropsURL}${movieDetails.backdrop_path}')`;
    headerStyle.height = "570px";
    headerBlur = {
      position: "relative",
      top: "0",
      left: "0",
      width: "20%",
      height: "100%",
      backdropFilter: "blur(25px)",
      mask: "linear-gradient(to bottom, rgb(41, 41, 41) 62.5%, rgb(41, 41, 41) 75%, rgb(41, 41, 41) 87.5%, rgb(41, 41, 41) 100%)",
    };

    headerOverlayStyle = {
      position: "absolute",
      top: "0",
      left: "0",
      background:
        "linear-gradient(to right,  rgb(30, 30, 30), rgba(52, 52, 52, .7))",
      marginLeft: "0",
      height: "620px",
      width: "100%",
      padding: "50px",
    };

  } else {
    headerStyle.backgroundImage = `url('/img/bumi.jpg')`;
    headerStyle.height = "350px";
  }

  return (
    <div className="header-container">
      <div
        className="header-image-wrapper header-wrapper mt-5"
        style={headerStyle}
      >
        <div className="header-blur" style={headerBlur}></div>
        <div
          className="header-overlay d-flex text-white row align-items-center"
          style={headerOverlayStyle}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Header;
