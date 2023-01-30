import './about.scss'


// front-end tech images
import angular from '../../assets/img/tech/front/angular.png';
import css from '../../assets/img/tech/front/css.png';
import html from '../../assets/img/tech/front/html.png';
import js from '../../assets/img/tech/front/js.png';
import react from '../../assets/img/tech/front/react.png';


// back-end tech images
import ejs from '../../assets/img/tech/back/ejs.png';
import express from '../../assets/img/tech/back/express.png';
import nestjs from '../../assets/img/tech/back/nestjs.png';
import nodejs from '../../assets/img/tech/back/nodejs.png';

// other tech images
import material from '../../assets/img/tech/other/ang-material.png';
import aws from '../../assets/img/tech/other/aws.png';
import bootstrap from '../../assets/img/tech/other/bootstrap.png';
import figma from '../../assets/img/tech/other/figma.png';
import github from '../../assets/img/tech/other/github.png';
import highcharts from '../../assets/img/tech/other/highcharts.png';
import leaflet from '../../assets/img/tech/other/leaflet.png';
import mongodb from '../../assets/img/tech/other/mongodb.png';
import mysql from '../../assets/img/tech/other/mysql.png';
import ngxs from '../../assets/img/tech/other/ngxs.png';
import ts from '../../assets/img/tech/other/typescript.png';

const frontEndTech = [js, angular, react, css, html];
const backEndTech = [nodejs, nestjs, express, ejs];
const otherTech = [figma, mongodb, mysql, ts, github, highcharts, leaflet, material, ngxs, aws, bootstrap]

const About = () => {

  return (
      <div className='about-container' id='about'>

        <div className="section-label">About</div>

        <div className='about-content-container'>

          <div className='bio-container'>
            <div className='about-subtitle'>Bio</div>

            <div className='condensed'>
              <p>
                I am a self-taught web-developer. 
              </p>

              <p>
                I have always been entranced by coding. From dreaming to be a super-genius and learning C++ to build video games in high school, to...dreaming during graduate school to someday be a super-genius quant in investment banking.
              </p>

              <p>
                After years working in the accounting field and realizing, there would be no straightforward bridge into software engineering, I went forth on my own path.
              </p>

              <p>
                I am currently focusing my personal efforts on front-end development, UI design, React...and still working on becoming a super-genius.
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
                          src= {tech} 
                          alt='tech'
                          loading='lazy'
                          />
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
                          src= {tech} 
                          alt='tech'
                          loading='lazy'
                          />
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
                          src= {tech} 
                          alt='tech'
                          loading='lazy'
                          />
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