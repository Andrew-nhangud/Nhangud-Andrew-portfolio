import { motion } from "framer-motion";
import "./Skills.css";

export const Skills = () => {
  const skills = [
    { label: "HTML5", level: "PROFICIENT" },
    { label: "CSS3", level: "PROFICIENT" },
    { label: "JavaScript(ES6+)", level: "BEGINNER" },
    { label: "React", level: "BEGGINER" },
  ];

  const tools = [
    { label: "Git ", purpose: "VERSION CONTROL" },
    { label: "Figma ", purpose: "UI/UX DESIGN" },
    { label: "GitHub", purpose: "VERSION CONTROL" },
    { label: "Framer Motion", purpose: "ANIMATION" },
  ];

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="expertise" className="expertise-container">
      <motion.div
        className="expertise-skills"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h1 className="section-header" variants={headerVariants}>
          EXPERTISE
        </motion.h1>
        <motion.h1 className="expertise-header" variants={headerVariants}>
          Languages & Frameworks
        </motion.h1>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="expertise-label">{skill.label}</p>
            <p className="expertise-level">{skill.level} </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="divider"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div className="line"></motion.div>
        <motion.div className="box"></motion.div>
        <motion.div className="line"> </motion.div>
      </motion.div>

      <motion.div
        className="expertise-tools"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h1 className="expertise-header" variants={headerVariants}>
          Tools & workflow
        </motion.h1>
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="expertise-label">{tool.label}</p>
            <p className="expertise-level"> {tool.purpose}</p>
          </motion.div>
        ))}
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
