import { useState } from "react";
import "./Navbar.css";
import menuIcon from "../../assets/images/menu-bar.svg";
import closeIcon from "../../assets/images/close.svg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define links with IDs
  const navLinks = [
    { label: "EXPERTISE", id: "expertise" },
    { label: "PORTFOLIO", id: "portfolio" },
    { label: "ABOUT", id: "about" },
    { label: "CONTACT", id: "contact" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);

  //  Helper to close menu when a link is clicked
  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="inner-container desktop-navbar">
      <div className="inner-navbar">
        {/* logo */}
        <p id="hero" className="logo">
          A.N.
        </p>

        {/* toggle images */}
        <img
          src={isOpen ? closeIcon : menuIcon}
          alt="Toggle Menu"
          onClick={toggleMenu}
          className="mobile-toggle"
        />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="mobile-menu">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}

          {/* the diveder line */}
          <div className="divider">
            <div className="line"></div>
            <div className="box"></div>
            <div className="line"> </div>
          </div>
        </ul>
      )}

      {/* Desktop Menu */}
      <ul className="desktop-menu">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
