import './App.css'
import { FlickeringGridDemo } from './components/ui/FlickeringGridDemo'
import { Case } from './components/ui/cases-with-infinite-scroll'

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
        <div className="terminal-body hero-content">
          <div className="text-content">
            <p className="prompt">$ echo "Bienvenidos a Bootcamperu"</p>
            <h1 className="hero-text">Bienvenidos a Bootcamperu</h1>
            <p className="sub-text">Transformando apasionados en desarrolladores expertos.</p>
          </div>
          <div className="image-content">
            <div className="hero-viz-container">
              <FlickeringGridDemo />
            </div>
          </div>
        </div>
      </header>
      
      <main className="carousel-section">
        <Case />
      </main>

      <footer className="footer">
        <p>© 2026 Bootcamperu. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
