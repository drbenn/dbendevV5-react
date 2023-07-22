import { useState } from 'react';
import './archive-project.scss'

type ProjectProps = {
  title: string, 
  detail: string, 
  img: string,
  tech: string, 
  gitLink: string, 
  demoLink: string, 
  date: string
}

const ArchiveProject = (props: ProjectProps) => {

  const {title, detail, img, tech, gitLink, demoLink, date} = props

// add docker, postman, d3, add python
return (
  <div className='project-container'>
    <div className='picture-container'>
      <img
        alt={title}
        src={`../../assets/img/portfolio/${img}`}
      />
    </div>
    <div className='detail-container'>
      <div className='project-title'>{title}</div>
      <div className='project-date'>{date}</div>
      <div className='project-content'>{detail}</div>
      
    </div>

  </div>



)
}

export default  ArchiveProject;