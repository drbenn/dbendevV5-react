import { useState } from 'react';
import './portfolio-archive.scss'
import ArchiveProject from '../archive-project/archive-project';


const PortfolioArchive = () => {
  const [viewArchive, setViewArchive] = useState(false)

  function updateArchiveView() {
    setViewArchive(!viewArchive)
    console.log(viewArchive);
    
  }

return (
  <div className='archive-container' id='archive'>
    <span className="archive-title" 
      onClick={updateArchiveView}>Past Projects &nbsp;
      { viewArchive && <span>&#x25B2;</span>} 
      { !viewArchive && <span>&#x25BC;</span>} 
      </span>
    <div className={viewArchive ? 'archive-inView' : 'archive-hidden'}>
      <ArchiveProject />



    </div>
  </div>



)
}

export default PortfolioArchive;