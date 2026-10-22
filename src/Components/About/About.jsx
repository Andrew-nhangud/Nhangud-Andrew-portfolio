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
      transition: { duration: 0.6, ease: "easeOut" },
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

      {/* about intro */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="about-intro" variants={itemVariants}>
          <p>
            I'm a frontend developer passionate about turning complex ideas into
            clean, accessible and user focused web experiences.
          </p>
        </motion.div>

        <motion.div className="divider" variants={itemVariants}>
          <div className="line"></div>
          <div className="box"></div>
          <div className="line"> </div>
        </motion.div>

        <motion.div className="about-sec-intro" variants={itemVariants}>
          <p>
            With a solid foundation from CodeSpace Academy and a continuous
            drive for self directed learning. I specialize in building
            responsive interfaces using React, JavaScript, HTML and CSS. Whether
            collaborating with a development team on a full time basis or
            helping independent businesses launch their digital presence. I
            focus on writing clean code that drives real results.
          </p>
        </motion.div>
      </motion.section>

      <motion.div
        className="divider"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="line"></div>
        <div className="box"></div>
        <div className="line"> </div>
      </motion.div>

      {/* the approach */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1 className="about-heading" variants={itemVariants}>
          the approach
        </motion.h1>
        <motion.h2 className="about-sub-heading" variants={itemVariants}>
          Bridging Code and Client Solutions
        </motion.h2>
        <motion.p className="approach-para" variants={itemVariants}>
          My journey as a developer is fueled by practical hands on problem
          solving. Through my freelance work. I don't just write code I manage
          end to end project lifecycles, translate business requirements into
          technical architectures and ensure seamless deployment. This real
          world agency over my projects has sharpened my ability to adapt
          quickly, communicate transparently and deliver production ready code
          that matches modern industry standards.
        </motion.p>
      </motion.section>

      <motion.div
        className="divider"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="line"></div>
        <div className="box"></div>
        <div className="line"> </div>
      </motion.div>

      {/* technical skills */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1 className="about-heading" variants={itemVariants}>
          core technical skills
        </motion.h1>

        {/* Languages */}
        <motion.div
          className="about-list first-about-list"
          variants={itemVariants}
        >
          <h1 className="about-list-heading">Frontent Stack</h1>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>Css</li>
          </ul>
        </motion.div>

        {/* Tools */}
        <motion.div className="about-list" variants={itemVariants}>
          <h1 className="about-list-heading">Design & Workflow</h1>
          <ul>
            <li>UI/UX integration</li>
            <li>Figma</li>
            <li>Git & Version Control</li>
            <li>AI</li>
          </ul>
        </motion.div>

        {/* Core Principles */}
        <motion.div
          className="about-list last-about-list"
          variants={itemVariants}
        >
          <h1 className="about-list-heading">Core Principles</h1>
          <ul>
            <li>Responsive Web Design</li>
            <li>Clean & Sematic Architecture</li>
            <li>Performance Optimization</li>
          </ul>
        </motion.div>
      </motion.section>

      <motion.div
        className="divider"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="line"></div>
        <div className="box"></div>
        <div className="line"> </div>
      </motion.div>

      {/* Experience & milestone */}
      <motion.section
        className="xp-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1 className="about-heading" variants={itemVariants}>
          Experience & Milestone
        </motion.h1>
        <motion.div variants={itemVariants}>
          <h1 className="about-XP">Freelance Frontend Developer</h1>
          <span className="about-XP-sub-heading">APRIL 2026 - PRESENT</span>
          <p className="about-XP-para">
            Designing and deploying responsive web applications for independent
            businesses and local clients. Successfully engineered a modern web
            presence for Khumo Gardens focusing on modular React components and
            accessible design layouts.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h1 className="about-XP">Frontend Developer Graduate</h1>
          <span className="about-XP-sub-heading">CODESPACE ACADEMY</span>
          <p className="about-XP-para">
            Mastered modern web technologies, agile methodologies and semantic
            coding best practices through intensive project driven training.
          </p>
        </motion.div>
      </motion.section>
    </section>
  );
};
