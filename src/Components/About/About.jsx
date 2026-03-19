import "./About.css";

export const About = () => {
  return (
    <section id="about">
      <h1 className="section-header">ABOUT</h1>
      <p className="about-para first-para">
        I'm a front-end developer focused on building clean, high-performance
        web experiences. I specialize in
        <span className="high-light"> React </span> and love turning complex
        ideas into intuitive interfaces.{" "}
      </p>
      <p className="about-para second-para">
        Most recently, I developed a modern,
        <span className="high-light"> fully accessible</span> business site for
        <span className="high-light"> Kumo Gardens</span> to streamline their
        online presence. After graduating from
        <span className="high-light"> CodeSpace Academy</span>{" "}
      </p>

      <p className="about-para third-para">
        I've continued to sharpen my skills currently diving deep into
        <span className="high-light"> Tailwind css</span> to build more robust
        applications.
      </p>

      <p className="fouth-para">
        I believe that true luxury in digital design is found in the absence of
        friction.
      </p>

      <div className="section-end "></div>
    </section>
  );
};
