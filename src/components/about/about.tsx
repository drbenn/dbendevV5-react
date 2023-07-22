import './about.scss'


// front-end tech images
import angular from '../../assets/img/tech/front/angular.png';
import css from '../../assets/img/tech/front/css.png';
import html from '../../assets/img/tech/front/html.png';
import js from '../../assets/img/tech/front/js.png';
import react from '../../assets/img/tech/front/react.png';
import material from '../../assets/img/tech/front/ang-material.png';
import bootstrap from '../../assets/img/tech/front/bootstrap.png';
import highcharts from '../../assets/img/tech/front/highcharts.png';
import ngxs from '../../assets/img/tech/front/ngxs.png';
import chartjs from '../../assets/img/tech/front/chartjs.jpg';
import d3js from '../../assets/img/tech/front/d3js.png';
import redux from '../../assets/img/tech/front/redux.png';
import leaflet from '../../assets/img/tech/front/leaflet.png';


// back-end tech images
import ejs from '../../assets/img/tech/back/ejs.png';
import express from '../../assets/img/tech/back/express.png';
import nestjs from '../../assets/img/tech/back/nestjs.png';
import nodejs from '../../assets/img/tech/back/nodejs.png';
import mongodb from '../../assets/img/tech/back/mongodb.png';
import mysql from '../../assets/img/tech/back/mysql.png';
import postgres from '../../assets/img/tech/back/postgres.png';
import python from '../../assets/img/tech/back/python.png';


// other tech images
import aws from '../../assets/img/tech/other/aws.png';
import figma from '../../assets/img/tech/other/figma.png';
import github from '../../assets/img/tech/other/github.png';
import ts from '../../assets/img/tech/other/typescript.png';
import jira from '../../assets/img/tech/other/jira.png';

const frontEndTech = [{name: "JavaScript", img: js }, {name: "Angular", img: angular}, {name: "NGXS", img: ngxs },{name: "Redux", img: redux },{name: "React", img: react },{name: "HighCharts", img: highcharts },{name: "Chart.js", img: chartjs },{name: "D3", img: d3js },{name: "Leaflet", img: leaflet },{name: "Material", img: material }, {name: "Bootstrap", img: bootstrap },{name: "CSS", img: css}, {name: "HTML", img: html} ];

const backEndTech = [{name: "Node", img: nodejs },{name: "NestJs", img: nestjs },  {name: "Python", img: python }, {name: "MySQL", img: mysql },{name: "MongoDB", img: mongodb }, {name: "Postgres", img: postgres },{name: "Express", img: express },{name: "EJS", img: ejs } ];

const otherTech = [{name: "GitHub", img: github }, {name: "Jira", img: jira }, {name: "TypeScript", img: ts }, {name: "Figma", img: figma },{name: "AWS", img: aws } ]

const About = () => {

  return (
      <div className='about-container' id='about'>

        <div className="section-label">About</div>

        <div className='about-content-container'>

          <div className='bio-container'>
            <div className='about-subtitle'>Bio</div>

            <div className='about-detail'>
              <p>
                I am a self-taught web-developer. 
              </p>
              <p>
                After years working in the accounting field [CPA license soon to be retired], I realized there would be no straightforward bridge into software engineering, so I took my own path.
              </p>
              <p>
                I have been a full-time software engineer since March 2022.
              </p>
              <p>
                Check out my <a href="https://github.com/drbenn" target="_blank">Github repository</a> to see what I've been working on recently. It could be a javascript framework, C++ or some other random tech. 
              </p>
            </div>

          </div>

          <div className='tech-block'>
            <div className='tech-container'>

              <div className='about-subtitle'>Tech Used</div>

              <div className='tech-stack-container'>
                <div className='tech-stack-title'>
                  client-side
                </div>

                <div className='tech-img-row'>
                  {frontEndTech.map((tech) => {
                    return (
                      <div key={Math.random()} className='tech-img-container'>
                        <img 
                          src= {tech.img} 
                          alt='tech'
                          loading='lazy'
                          />
                          <div className='tech-name'>
                            {tech.name}
                          </div>
                          
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className='tech-stack-container'>
                <div className='tech-stack-title'>
                  server-side
                </div>

                <div className='tech-img-row'>
                  {backEndTech.map((tech) => {
                    return (
                      <div key={Math.random()} className='tech-img-container'>
                        <img 
                          src= {tech.img} 
                          alt='tech'
                          loading='lazy'
                          />
                          <div className='tech-name'>
                            {tech.name}
                          </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className='tech-stack-container'>
                <div className='tech-stack-title'>
                  other
                </div>

                <div className='tech-img-row'>
                  {otherTech.map((tech) => {
                    return (
                      <div key={Math.random()} className='tech-img-container'>
                        <img 
                          src= {tech.img} 
                          alt='tech'
                          loading='lazy'
                          />
                          <div className='tech-name'>
                            {tech.name}
                          </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About;