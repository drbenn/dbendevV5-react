import { useState } from 'react';
import './portfolio-archive.scss'
import ArchiveProject from '../archive-project/archive-project';
import projects from '../../assets/data/projectData.json'


const PortfolioArchive = () => {
  console.log(projects);
  
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
      {projects.map((project) => {
        return (
          <ArchiveProject
            key={project.index}
            title={project.title}
            detail={project.detail}
            img={project.img}
            tech={project.tech}
            gitLink={project.gitLink}
            demoLink={project.demoLink}
            date={project.date}
          />
        )
      })}
      



    </div>
  </div>



)
}

export default PortfolioArchive;