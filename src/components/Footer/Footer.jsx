const Footer = () => {
  return (
    <div className="footer text-white bg-dark pt-3">
      <a href="https://www.themoviedb.org/">
        <img
          className="tmdb-logo"
          src="\TMDb_logo.svg"
          alt="The Movie Database Logo"
        />
      </a>
      <p>
        This product uses the TMDb API but is not endorsed or certified by TMDb.
      </p>
    </div>
  );
}

export default Footer;