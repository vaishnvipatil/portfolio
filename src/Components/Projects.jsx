function Projects() {
  const projects = [
    {
      title: "Government Hospital Management System",
      description:
        "A system designed to improve efficiency and transparency in public healthcare institutions.",
      tech: "Java, Spring Boot, Hibernate, MySQL",
    },
    {
      title: "Jewelry Website",
      description:
        "Developed frontend pages and user functionalities using HTML, CSS, PHP, and SQL.",
      tech: "HTML, CSS, PHP, SQL",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p>
              <strong>Tech:</strong> {project.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;