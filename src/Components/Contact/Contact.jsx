import { motion } from "framer-motion";
import "./Contact.css";
import githubIcon from "../../assets/images/github.svg";
import linkedinIcon from "../../assets/images/linkedin.svg";

export const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
    },
  };

  return (
    <section id="contact">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.p className="section-header" variants={itemVariants}>
          RESERVATIONS & CONTACT
        </motion.p>
        <motion.p className="contact-message" variants={itemVariants}>
          Interested in working together?
        </motion.p>
        <motion.p className="gmail" variants={itemVariants}>
          me@andrewnhangud.com
        </motion.p>
      </motion.div>

      <motion.div
        className="contact-icons"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.a
          href="https://github.com/Andrew-nhangud"
          variants={iconVariants}
          whileHover="hover"
        >
          <img src={githubIcon} alt="github icon" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/andrew-nhangud"
          variants={iconVariants}
          whileHover="hover"
        >
          <img src={linkedinIcon} alt="linkedin icon" />
        </motion.a>
      </motion.div>

      <motion.div
        className="divider"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div className="line"></motion.div>
        <motion.div className="box"></motion.div>
        <motion.div className="line"> </motion.div>
      </motion.div>

      <motion.p
        className="copy-rights"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        &copy; 2026 Andrew Nhangud. All rights reserved.
      </motion.p>

      <motion.div
        className="section-end"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      ></motion.div>
    </section>
  );
};
