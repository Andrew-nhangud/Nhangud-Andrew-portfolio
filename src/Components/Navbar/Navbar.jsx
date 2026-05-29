import { useState } from "react";
import { motion } from "framer-motion";
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

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="inner-container "
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="inner-navbar">
        {/* logo */}
        <p id="hero" className="logo">
          <motion.a
            href="#Hero"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            A.N.
          </motion.a>
        </p>

        {/* toggle images */}
        <motion.img
          src={isOpen ? closeIcon : menuIcon}
          alt="Toggle Menu"
          onClick={toggleMenu}
          className="mobile-toggle"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        />

        {/* Desktop Menu */}
        <motion.ul className="desktop-menu">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.a
                href={`#${link.id}`}
                whileHover={{ color: "#7c3aed" }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          className="mobile-menu"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link) => (
            <motion.li key={link.id} variants={itemVariants}>
              <motion.a
                href={`#${link.id}`}
                onClick={handleLinkClick}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
              </motion.a>
            </motion.li>
          ))}

          {/* the diveder line */}
          <motion.div
            className="divider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div className="line"></motion.div>
            <motion.div className="box"></motion.div>
            <motion.div className="line"> </motion.div>
          </motion.div>
        </motion.ul>
      )}
    </motion.div>
  );
};
