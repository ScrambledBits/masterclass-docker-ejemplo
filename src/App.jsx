import './App.css'

function App() {
  return (
    <div className="landing-container">
      <header className="hero">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="terminal-title">~/bootcamperu</span>
        </div>
        <div className="terminal-body">
          <p className="prompt">$ echo "Bienvenidos a Bootcamperu"</p>
          <h1 className="hero-text">Bienvenidos a Bootcamperu</h1>
          <p className="sub-text">Transformando apasionados en desarrolladores expertos.</p>
          <div className="cta-buttons">
            <button className="primary-btn">Comenzar ahora</button>
            <button className="secondary-btn">Ver cursos</button>
          </div>
        </div>
      </header>
      
      <main className="features">
        <div className="feature-card">
          <h3>[ 01 ]</h3>
          <h4>Hands-on Labs</h4>
          <p>Aprende haciendo con proyectos del mundo real.</p>
        </div>
        <div className="feature-card">
          <h3>[ 02 ]</h3>
          <h4>Mentoría 1:1</h4>
          <p>Guía personalizada de expertos en la industria.</p>
        </div>
        <div className="feature-card">
          <h3>[ 03 ]</h3>
          <h4>Carrera</h4>
          <p>Te preparamos para el mercado laboral global.</p>
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 Bootcamperu. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
