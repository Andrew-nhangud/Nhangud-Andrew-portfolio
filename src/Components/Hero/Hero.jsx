import { motion } from "framer-motion";
import "./Hero.css";

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="Hero">
      <motion.div
        className="hero inner-contianer"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.p variants={itemVariants}>
          PORTFOLIO & CURRICULUM VITAE
        </motion.p>
        <motion.h1
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          ANDREW NHANGUD
        </motion.h1>

        <motion.div className="divider" variants={itemVariants}>
          <motion.div className="line"></motion.div>
          <motion.div className="box"></motion.div>
          <motion.div className="line"> </motion.div>
        </motion.div>

        <motion.h2 variants={itemVariants}>
          Front-End Developer & Interface Designer
        </motion.h2>
        <motion.p variants={itemVariants}>
          Crafting digital experiences with the precision and care of a
          Michelin-starred kitchen.
        </motion.p>
      </motion.div>
      <motion.div
        className="section-end"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        viewport={{ once: true }}
      />
    </section>
  );
};
