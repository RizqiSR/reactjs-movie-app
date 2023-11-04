import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer text-white bg-dark py-3 px-5">
      <div className="footer-container d-flex justify-content-around">
        <div className="footer-about">
        <p className="text-center fs-5 fw-bold">About :</p>
        <p>Movie App ini merupakan project frontend pertama saya yang menggunakan pustaka JavaScript ReactJS. Data yang ditampilkan sepenuhnya diambil dari API publik milik &quot;The Movie DB&quot;. Hingga saat ini, website masih/dan akan terus dikembangkan. Source code bisa dilihat di laman Github saya.</p>
        </div>
        <div className="footer-contact">
        <p className="text-center fs-5 fw-bold">Contacts :</p>
            <p className="footer-contact-detail"><i className="bi bi-geo-alt me-3"/>Bekasi, Indonesia</p>
            <p className="footer-contact-detail"><i className="bi bi-telephone me-3"/>082113125827</p>
            <p className="footer-contact-detail"><i className="bi bi-envelope me-3"/>rizqi.srahmah27@gmail.com</p>
        </div>
        <div className="footer-social">
          <p className="text-center fs-5 fw-bold">Socials :</p>
            <span><Link to={"https://github.com/RizqiSR"}><i className="bi bi-github me-3 text-white"/></Link></span>
            <span><Link to={"https://linkedin.com/in/rizqisitirahmah"}><i className="bi bi-linkedin me-3 text-white"/></Link></span>
            <span><Link to={"https://twitter.com/lilolelime"}><i className="bi bi-twitter-x me-3 text-white"/></Link></span>
            <span><Link to={"https://www.instagram.com/rizqisrahmah/"}><i className="bi bi-instagram text-white"/></Link></span>
        </div>
      </div>
      <div className="credit-container text-center fst-italic pb-2">
        <Link to="https://www.themoviedb.org/">
          <img
            className="tmdb-logo"
            src="./TMDb_logo.svg"
            alt="The Movie Database Logo"
          />
        </Link>
        <p>
          This product uses the TMDb API but is not endorsed or certified by TMDb.
        </p>
      </div>
      <p className="credit-frontdev fw-lighter">&copy; 2023 by Rizqi Siti Rahmah</p>
    </div>
  );
}

export default Footer;