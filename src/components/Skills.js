import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

import next from "../assets/icons/skills/nextjs-icon.svg";
import cpp from '../assets/icons/skills/cpp.svg';
import python from '../assets/icons/skills/python.svg';
import javascript from '../assets/icons/skills/javascript.svg';
import typescript from '../assets/icons/skills/typescript.svg';
import dart from '../assets/icons/skills/dartlang-icon.svg';

import  html from '../assets/icons/skills/html-5.svg';
import  css from '../assets/icons/skills/css3.svg';
import  react from '../assets/icons/skills/react.svg';

import  node from '../assets/icons/skills/node.svg';
import  express from '../assets/icons/skills/express-js.svg';
import flutter from '../assets/icons/skills/flutterio-icon.svg';
import  graphql from '../assets/icons/skills/graphql.svg';
import api from '../assets/icons/skills/api-icon.svg';


import  mysql from '../assets/icons/skills/mysql.svg';
import  mongodb from '../assets/icons/skills/mongodb.svg';
import  postresql from '../assets/icons/skills/postgresql.svg';
import  git from '../assets/icons/skills/git.svg';



export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={cpp} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={dart} alt="Image" />
                                <h5>Dart</h5>
                            </div>
                            <div className="item">
                                <img src={typescript} alt="Image" />
                                <h5>Typescript</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={next} alt="Image" />
                                <h5>Next.js</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={express} alt="Image" />
                                <h5>Express.js</h5>
                            </div>
                            <div className="item">
                                <img src={flutter} alt="Image" />
                                <h5>Flutter</h5>
                            </div>
                            <div className="item">
                                <img src={api} alt="Image" />
                                <h5>REST API</h5>
                            </div>
                            <div className="item">
                                <img src={graphql} alt="Image" />
                                <h5>GraphQL</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={postresql} alt="Image" />
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" />
                                <h5>Git</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}


