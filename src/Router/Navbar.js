import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../components/HomePage.css';


const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   if (window.innerWidth <= 1200) {
  //     closeMenu();
  //   }
  // }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="myNavbar">
        <img src="./img/logo.png" alt="Logo" />
      </div>
      <a 
        className={`navHumburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="navHumburgerLine"></span>
        <span className="navHumburgerLine"></span>
        <span className="navHumburgerLine"></span>
      </a>
      <div className={`navbarItems ${navActive ? "active moreActive" : ""}`}>
      <ul>
          <li onClick={closeMenu}>
            <Link to="/" className="navbarContent">Home</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/blog" className="navbarContent">Blog</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/about" className="navbarContent">About</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/services" className="navbarContent">Services</Link>
          </li>
        </ul>
      </div>
      <div>
        <button onClick={closeMenu} className="btn btn-outline-primary" >
          Login
        </button>

        <button onClick={closeMenu} className="btn btn-outline-primary">
          sign up
        </button>     
      </div>
    </nav>
  );
}



export default  Navbar;