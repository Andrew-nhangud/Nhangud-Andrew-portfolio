import "./Project.css";

const projectLists = [
  {
    label: "Kumo Gardens",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus laborum delectus odio ullam totam magnam maxime temporibus ipsa amet neque excepturi officiis harum id",
    skills: ["React", "HTML", "CSS", "JavaScript", "Framer Motion"],
  },
  {
    label: "API project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus laborum delectus odio ullam totam magnam maxime temporibus ipsa amet neque excepturi officiis harum id",
    skills: ["React", "HTML", "CSS", "JavaScript", "Framer Motion"],
  },
  {
    label: "Third idea",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus laborum delectus odio ullam totam magnam maxime temporibus ipsa amet neque excepturi officiis harum id",
    skills: ["React", "HTML", "CSS", "JavaScript", "Framer Motion"],
  },
];

export const Project = () => {
  return (
    <section id="portfolio">
      <h1 className="section-header"> PORTFOLIO</h1>
      <div>
        {projectLists.map((project, index) => (
          <div key={index} className="project-container">
            <p className="project-name">{project.label}</p>
            <p className="project-description">{project.description}</p>
            <div className="project-languages">
              {project.skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>

            {/* the diveder line */}
            <div className="divider">
              <div className="line"></div>
              <div className="box"></div>
              <div className="line"> </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
