import './App.css'
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import Splash from './components/splash/splash';


function App() {

  return (
    <div className='app-wrapper' id='top'>
      <div className='app-body'>
        <Navbar />
        <div className='splash-app-wrapper'>
          <Splash />
        </div>
        <div className='section-wrapper'>
          <Portfolio />
        </div>
        <div className='section-wrapper'>
          <About />
        </div>
      </div>
      <Contact />
    </div>
  )
}

export default App;
