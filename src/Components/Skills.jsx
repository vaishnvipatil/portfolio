function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "React",
    "Java",
    "Spring Boot",
    "Hibernate",
    "MySQL",
    "SQL",
    "DSA",
    "Python",
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;