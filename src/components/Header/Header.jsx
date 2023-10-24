import { imageURL } from "../../utils/fetchDataAPI";

const Header = ({ children, movieDetails }) => {
  const movieBackdropPath = (movieDetails) ? `url('${imageURL}${movieDetails.backdrop_path}')` : `url('public/img/bumi.jpg')`
  const headerStyle = {
    backgroundImage: movieBackdropPath,
    backgroundSize: 'cover'
  }

  return (
    <div className="header-container">
      <div
        className="header-image-wrapper header-wrapper mt-5"
        style={headerStyle}
      >
        <div className="card-img-overlay header-overlay text-white row align-content-center bg-body bg-opacity-50 ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Header;
