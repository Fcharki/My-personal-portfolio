import html from  "../assets/img/html.png";
import css from  "../assets/img/css.png";
import bs from  "../assets/img/bs.png";
import php from  "../assets/img/php1.png";
import js from  "../assets/img/js.png";
import figma from  "../assets/img/figma.png";
import react from  "../assets/img/react.png";
import mysql from  "../assets/img/mysql.png";
import mangodb from  "../assets/img/mangodb.png";
import nodejs1 from  "../assets/img/nodejs2.png";
import laravel from  "../assets/img/laravel.png";
import canva from  "../assets/img/canva.png";
import jira from  "../assets/img/jira.png";
import ts from  "../assets/img/ts.png";
import express from  "../assets/img/express2.png";
import git from  "../assets/img/git.png";
import python from "../assets/img/python.png";
import agile from  "../assets/img/agile.png";
import 'react-multi-carousel/lib/styles.css';
import '../app.css';
import OnlineCert from './onlinecert';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="container pt-5 mt-4 text-center my-3" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2  style={{ fontWeight: '500' }} className="underlined skill mt-4">Skills</h2>
                        <p className="fontSize">My skills include HTML, CSS, JavaScript, React, Node.js, PHP, MySQL, MongoDB, Laravel, python and proficiency in project management tools such as Git, Jira, and Agile methodologies</p>
                        <div className="skills">
                          <div>
                            <div className="skill-wrapper">
                            <p className="col-md justify-content-center mx-5 px-2 my-4 paragtitle">Front End</p>
                              <div className="row d-flex justify-content-center m-3"><div  className="enfant mx-3   my-2"><img src={html} alt='html' title="html" className="img-fluid"/></div>
                              <div  className="enfant mx-3  my-2"><img src={css} alt='css' title="css" className="img-fluid"/></div>
                            <div  className="enfant mx-3  my-2"><img src={bs} alt='bootstrap' title='bootstrap' className="img-fluid"/></div>
                            </div>
                              <div className="row d-flex justify-content-center m-3"><div  className="enfant mx-3  my-2"><img src={js} alt='javascript' title="javascript" className="img-fluid"/></div>
                            <div  className="enfant mx-3  my-2"><img src={react} alt='react' title="react" className="img-fluid"/></div>
                            <div  className="enfant mx-3  my-2"><img src={ts} alt='typescript' title="typescript" className="img-fluid"/></div>
                            </div>
                            </div>
                          </div><br/>
                          <div>
                            <div className="skill-wrapper">
                            <p className="col-md justify-content-center mx-5 px-2 my-4 paragtitle">Back End</p>
                              <div className="row d-flex justify-content-center m-3">
                              <div  className="enfant mx-3  my-2"><img src={mysql} title="mysql" alt='mysql'/></div>
                            <div  className="enfant mx-3  my-2"><img src={laravel} title="laravel" alt='laravel'/></div>
                            <div  className="enfant mx-3  my-2"><img src={mangodb} title="mangodb" alt='mangodb'/></div>
                            <div  className="enfant mx-3  my-2"><img src={python} title="python" alt='python'/></div>
                              </div>
                              <div className="row d-flex justify-content-center m-3">
                              <div  className="enfant mx-3  my-2"><img src={php} title="php" alt='php'/></div>
                            <div  className="enfant mx-3  my-2"><img src={nodejs1} title="node.js" alt='node.js'/></div>
                            <div  className="enfant mx-3  my-2"><img src={express} title="express.js" alt='express.js'/></div>
                              </div>
                            </div>
                          </div><br/>
                          <div >
                            <div className="skill-wrapper ">
                            <p className="col-md justify-content-center mx-5 px-2 my-4 paragtitle">Design</p>
                              <div className="row d-flex justify-content-center m-3">
                              <div  className="enfant mx-3 my-2"><img src={canva} title="canva" alt='canva'/></div>
                            <div  className="enfant mx-3  my-2"><img src={figma} title="figma" alt='figma'/></div>
                              </div>
                            </div>
                          </div><br/>
                          <div >
                            <div className="skill-wrapper ">
                            <p className="col-md justify-content-center mr-5 px-2 my-4 paragtitle w-100">Project Management and Collaboration</p><br/>
                              <div className="row d-flex justify-content-center m-3">
                              <div className="enfant mx-3  my-2"><img src={git} title="git" alt='git'/></div>
                            <div  className="enfant mx-3  my-2"><img src={agile} title='agile methodologies' alt='agile methodologies'/></div>
                            <div  className="enfant mx-3  my-2"><img src={jira} title="jira" alt='jira'/></div>
                              </div>
                            </div>
                          </div>
                        </div>
                </div>
                </div>
            </div>
        </div>
        <OnlineCert/>
    </section>
  )
}