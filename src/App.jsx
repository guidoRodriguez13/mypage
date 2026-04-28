import { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️ Modo claro' : '🌙 Modo oscuro'}
      </button>

      <header className="hero">
        <img
          src="https://via.placeholder.com/130"
          alt="Foto de perfil"
          className="profile-pic"
        />
        <h1>Guido Rodriguez</h1>
        <p>Desarrollador Web | Diseñador | Estudiante</p>
      </header>

      <main className="container">
        <section className="card">
          <h2>Sobre mí</h2>
          <p>
            ¡Hola! Soy un apasionado por la tecnología y el diseño.
            Me encanta crear experiencias digitales limpias y funcionales.
          </p>
        </section>

        <section className="card">
          <h2>Habilidades</h2>
          <div className="skills-grid">
            {['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Python', 'Git', 'Figma'].map(
              (skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              )
            )}
          </div>
        </section>

        <section className="card">
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

        <section className="card">
          <h2>Contacto</h2>
          <p>¿Tienes una idea o proyecto en mente? ¡Conversemos!</p>
          <div className="contact-links">
            <a href="mailto:tuemail@example.com" className="contact-btn">📧 Correo</a>
            <a href="https://linkedin.com/in/tuusuario" target="_blank" className="contact-btn">🔗 LinkedIn</a>
            <a href="https://github.com/tuusuario" target="_blank" className="contact-btn">💻 GitHub</a>
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