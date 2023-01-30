import './contact.scss'
import { FaRegEnvelope, FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import email from '../../assets/img/contact/envelope.png';
import github from '../../assets/img/contact/github.png';
import linkedin from '../../assets/img/contact/linked.png';

const Contact = () => {

  return (
      <div className='contact-container' id='contact'>

        <div className="section-label">Contact</div>

        <div className='contact-links-box'>

          <div className='contact-block'>
            <div className='contact-img'>
              <a href="mailto: bennett.daniel@gmail.com">
                <img 
                  src={email}
                  alt={"email"}
                  loading="lazy"                    
                ></img>
              </a>

            </div>
            <div className='contactlink'>
              <div><a href="mailto: bennett.daniel@gmail.com">bennett.daniel@gmail.com</a></div>
            </div>
          </div>

          <div className='contact-block'>
            <div className='contact-img'>
              <a href="https://github.com/drbenn" target="_blank">
                  <img 
                    src={github}
                    alt={"Github"}
                    loading="lazy"                    
                  ></img>
              </a>
            </div>
            <div>
              <div><a href="https://github.com/drbenn" target="_blank">github.com/drbenn</a></div>
            </div>
          </div>

          <div className='contact-block'>
            <div className='contact-img'>
            <a href="https://www.linkedin.com/in/bennettdanielr/" target="_blank">
              <img 
                  src={linkedin}
                  alt={"LinkedIn"}
                  loading="lazy"                    
              ></img>
            </a>    
            </div>
            <div className='contactlink'>
              <div><a href="https://www.linkedin.com/in/bennettdanielr/" target="_blank">linkedin.com/in/bennettdanielr</a></div>
            </div>
          </div>

        </div>

        <footer>
          danbennett.dev
        </footer>
      </div>
  )
}

export default Contact;