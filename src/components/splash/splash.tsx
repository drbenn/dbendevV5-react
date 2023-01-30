import './splash.scss'
import splash from '../../assets/img/splash/splash66.png'

const Splash = () => {

  return (
      <div className='splash-container'>
        <div className='splash-text-container'>
          <div className='line-1-row'>
            <div className='splash-text-line-1'>
              <span className='anim-1'>Hello</span>
              <span className='anim-2'>,</span> 
              <span className='anim-3'> I'm</span>
            </div>
            <div className='title-text-accent anim-4'>Dan</div>

          </div>

          <div className='splash-text-line-2 anim-5'>
            I do web development
          </div>
        </div>
        <img 
          src={splash} 
          alt="splash" 
          loading='eager'
          />
      </div>
  )
}

export default Splash;