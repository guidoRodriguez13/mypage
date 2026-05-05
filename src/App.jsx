import './App.css'

function App() {
  return (
    <div className="app dark">
      <header>
        <img
          src="/profile.png"
          alt="Foto de perfil"
          className="profile-pic"
        />
        <h1>Guido Rodriguez</h1>
        <p>Desarrollador Web | Jugador de basquet | Estudiante</p>
      </header>

        <section>
          <div className="contact-links">
            <a href="mailto:rodriguezguido1994@gmail.com" className="contact-btn">📧</a>
            <a href="https://www.linkedin.com/in/guidorodriguez13/" target="_blank" className="contact-btn">🔗 LinkedIn</a>
            <a href="https://github.com/guidoRodriguez13" target="_blank" className="contact-btn">💻 GitHub</a>
          </div>
        </section>

      <main className="container">
        <section>
          <h2>Sobre mí</h2>
          <p> ¡Hola! Soy un apasionado por la tecnología y el basquet.</p>
          <p> Me encantan los desafios digitales.</p>
        </section>

        <section>
          <h2>Habilidades</h2>
          <div className="skills-grid">
            {['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Python', 'Git', 'Figma'].map(
              (skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              )
            )}
          </div>
        </section>

        <section>
          <h2>Proyectos</h2>
          <div className="projects-grid">
            {[
              { title: '📱 App del Clima', desc: 'Clima en tiempo real con API REST.' },
              { title: '🛒 Tienda Online', desc: 'E-commerce simulado con React y Firebase.' },
              { title: '📝 Blog Personal', desc: 'Blog estático con Markdown y GitHub Pages.' },
              { title: '🎮 Juego de Memoria', desc: 'Juego interactivo con React hooks.' }
            ].map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer>
        © {new Date().getFullYear()} Guido Rodriguez — Todos los derechos reservados
      </footer>
    </div>
  )
}

export default App