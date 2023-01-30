import './portfolio.scss'

import chargingStation from '../../assets/img/portfolio/charging-stations.png';
import guessWho from '../../assets/img/portfolio/guess-who.png';
import mtlt from '../../assets/img/portfolio/mtlt.png';

import link from '../../assets/img/portfolio/link-buttons/link-2.png';
import github from '../../assets/img/portfolio/link-buttons/github.png';


const Portfolio = () => {

  return (
    <div className='portfolio-container' id='portfolio'>

      <div className="section-label">Portfolio</div>

      <div className='portfolio-content-container'>

        <div className='feature-card-container'>

          <img  
              className='project-img' 
              src= {chargingStation} 
              alt='Charging Station'
              loading='lazy'
            />
          <div className='feature-hover-detail-container'>

            <div className='feature-title'>
                Interactive
              </div>

              <div className='feature-detail'>
                Leaflet, Angular, scrollspy
              </div>

              <div className='feature-icon-links-row'>
                
                <div className='icon-img-container'>
                  <a href="https://danbennett.dev/charging-stations/" target="_blank">
                      <img 
                        src={link}
                        alt={"Demo Link"}
                        loading="lazy"                    
                      ></img>
                  </a>
                </div>

                <div className='icon-img-container'>
                  <a href="https://github.com/drbenn/charging-stations" target="_blank">
                      <img 
                        src={github}
                        alt={"Github Repo"}
                        loading="lazy"                    
                      ></img>
                  </a>
                </div>

              </div>
          </div>
        </div>

        <div className='feature-card-container'>
          <img  
              className='project-img' 
              src= {guessWho} 
              alt='Guess Who'
              loading='lazy'
            />
          <div className='feature-hover-detail-container'>
            <div className='feature-title'>
              Guess Who Game
            </div>

            <div className='feature-detail'>
              React
            </div>

            <div className='feature-icon-links-row'>

              <div className='icon-img-container'>
                <a href="https://drbenn.github.io/guess-who-react/" target="_blank">
                    <img 
                      src={link}
                      alt={"Demo Link"}
                      loading="lazy"                    
                    ></img>
                </a>
              </div>

              <div className='icon-img-container'>
                <a href="https://github.com/drbenn/guess-who-react" target="_blank">
                    <img 
                      src={github}
                      alt={"Github Repo"}
                      loading="lazy"                    
                    ></img>
                </a>
              </div>

            </div>

          </div>
        </div>

        <div className='feature-card-container'>
          <img  
              className='project-img' 
              src= {mtlt} 
              alt='Fitness Tracker'
              loading='lazy'
            />
          <div className='feature-hover-detail-container'>

          <div className='feature-title'>
              Fitness Tracker
            </div>

            <div className='feature-detail'>
              Nest.js, MongoDB, Angular
            </div>

            <div className='feature-icon-links-row'>
              
              <div className='icon-img-container'>
                <a href="https://danbennett.dev/mtlt/" target="_blank">
                    <img 
                      src={link}
                      alt={"Demo Link"}
                      loading="lazy"                    
                    ></img>
                </a>
              </div>

              <div className='icon-img-container'>
                <a href="https://github.com/drbenn/mtlt" target="_blank">
                    <img 
                      src={github}
                      alt={"Github Repo"}
                      loading="lazy"                    
                    ></img>
                </a>
              </div>

            </div>


          </div>
        </div>
      
      </div>

    </div>



  )
}

export default Portfolio;