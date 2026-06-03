import { motion } from "framer-motion";
import "./Project.css";
import { link } from "framer-motion/client";
import { Link } from "react";

const projectLists = [
  {
    label: "Kumo Gardens",
    description:
      "This fast static React website showcases a local garden venue's services and accommodations using a nature-inspired design. It features reusable components and custom CSS along with fully responsive navigation optimized for both mobile and desktop screens.",
    skills: ["React", "CSS", "HTML"],
    link: "https://khumo-gardens.vercel.app/",
  },
  {
    label: "Booking website",
    description:
      "A dynamic artist booking platform built with React, HTML, and CSS that manages the entire reservation workflow from search to confirmation. It integrates a mock API via JSON Server and React Router with dynamic parameters to fetch and display detailed artist profiles. Users can search for performers, fill out a booking form secured by React Hook Form, and view their scheduled events instantly on a dedicated bookings overview page.",
    skills: ["React", "CSS", "HTML"],
    link: "https://booking-artist.vercel.app/",
  },
  {
    label: "kanban",
    description:
      "A responsive, client side task management application designed for seamless daily workflow organization. The application enables users to dynamically track tasks across structured workflows while ensuring data persistence and cross device accessibility.",
    skills: ["JavaScript", "CSS", "HTML"],
    link: "https://andnha-25109-fto-2502a-group-a1-and.vercel.app",
  },
];

export const Project = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="portfolio">
      <motion.h1
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {" "}
        PORTFOLIO
      </motion.h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {projectLists.map((project, index) => (
          <motion.div
            key={index}
            className="project-container"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href={project.link} target="blank">
              <motion.p className="project-name">{project.label}</motion.p>
              <motion.p className="project-description">
                {project.description}
              </motion.p>
              <motion.div className="project-languages">
                {project.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="skill-tag"
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
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
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
