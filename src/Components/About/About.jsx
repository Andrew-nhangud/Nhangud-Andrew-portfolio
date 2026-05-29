import { motion } from "framer-motion";
import "./About.css";

export const About = () => {
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
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="about">
      <motion.h1
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        ABOUT
      </motion.h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.p className="about-para first-para" variants={itemVariants}>
          I'm a front-end developer focused on building clean, high-performance
          web experiences. I specialize in
          <span className="high-light"> React </span> and love turning complex
          ideas into intuitive interfaces.{" "}
        </motion.p>
        <motion.p className="about-para second-para" variants={itemVariants}>
          Most recently, I developed a modern,
          <span className="high-light"> fully accessible</span> business site
          for
          <span className="high-light"> Kumo Gardens</span> to streamline their
          online presence. After graduating from
          <span className="high-light"> CodeSpace Academy</span>{" "}
        </motion.p>

        <motion.p className="about-para third-para" variants={itemVariants}>
          I've continued to sharpen my skills currently diving deep into
          <span className="high-light"> Tailwind css</span> to build more robust
          applications.
        </motion.p>

        <motion.p className="fouth-para" variants={itemVariants}>
          I believe that true luxury in digital design is found in the absence
          of friction.
        </motion.p>
      </motion.div>

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
