function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <h1>
          Hi, I'm <span>Vaishnavi Patil</span>
        </h1>

        <h2>Aspiring MERN Stack Developer</h2>

        <p>
          Motivated Computer Science student passionate about building
          responsive and interactive web applications using modern web
          technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects">
            <button>View Projects</button>
          </a>

          <a
            href="/RESUME_VAISHNAVI.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button>Download Resume</button>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;