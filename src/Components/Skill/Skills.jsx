import "./Skills.css";

export const Skills = () => {
  // Skills array
  const skills = [
    { label: "HTML5", level: "PROFICIENT" },
    { label: "CSS3", level: "PROFICIENT" },
    { label: "JavaScript(ES6+)", level: "BEGINNER" },
    { label: "React", level: "BEGGINER" },
  ];
  // tools array
  const tools = [
    { label: "Git ", purpose: "VERSION CONTROL" },
    { label: "Figma ", purpose: "UI/UX DESIGN" },
    { label: "GitHub", purpose: "VERSION CONTROL" },
    { label: "Framer Motion", purpose: "ANIMATION" },
  ];

  return (
    <section id="expertise" className="expertise-container">
      <div className="expertise-skills">
        <h1 className="section-header">EXPERTISE</h1>
        <h1 className="expertise-header">Languages & Frameworks</h1>
        {skills.map((skill, index) => (
          <div key={index}>
            <p className="expertise-label">{skill.label}</p>
            <p className="expertise-level">{skill.level} </p>
          </div>
        ))}
      </div>

      {/* the diveder line */}
      <div className="divider">
        <div className="line"></div>
        <div className="box"></div>
        <div className="line"> </div>
      </div>

      <div className="expertise-tools">
        <h1 className="expertise-header">Tools & workflow</h1>
        {tools.map((tool, index) => (
          <div key={index}>
            <p className="expertise-label">{tool.label}</p>
            <p className="expertise-level"> {tool.purpose}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
