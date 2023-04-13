import { useState } from 'react';
import './portfolio-archive.scss'


const PortfolioArchive = () => {
  const [viewArchive, setViewArchive] = useState(false)

  function updateArchiveView() {
    setViewArchive(!viewArchive)
    console.log(viewArchive);
    
  }

return (
  <div className='archive-container' id='archive'>
    <span className="archive-title" onClick={updateArchiveView}>Past Projects</span>
    <div className={viewArchive ? 'archive-display' : 'archive-hidden'}>Archive CONTENT</div>
  {/* {viewArchive &&

  
  
  } */}


  </div>



)
}

export default PortfolioArchive;