import React from 'react'
import PropTypes from 'prop-types'

import HHmockup from '../images/HHmockup.png'
import BHmockup from '../images/BHmockup.png'
import ProfilePic from '../images/ProfilePic.jpg';
import WebsiteGif from '../images/Sentence800x600.gif'

import Redux from '../images/Redux.png'
import css3originalwordmark from '../assets/tech-icons/css3/css3originalwordmark.svg'
import reactoriginalwordmark from '../assets/tech-icons/react/reactoriginalwordmark.svg'
import javascriptoriginal from '../assets/tech-icons/javascript/javascriptoriginal.svg'
import html5originalwordmark from '../assets/tech-icons/html5/html5originalwordmark.svg'
import nodejsoriginalwordmark from '../assets/tech-icons/nodejs/nodejsoriginalwordmark.svg'
import gitoriginalwordmark from '../assets/tech-icons/git/gitoriginalwordmark.svg'
import postgresqloriginalwordmark from '../assets/tech-icons/postgresql/postgresqloriginalwordmark.svg'
import sassoriginal from '../assets/tech-icons/sass/sassoriginal.svg'
import webpackoriginalwordmark from '../assets/tech-icons/webpack/webpackoriginalwordmark.svg'
import visualstudioplainwordmark from '../assets/tech-icons/visualstudio/visualstudioplainwordmark.svg'
import amazonwebservicesoriginalwordmark from '../assets/tech-icons/amazonwebservices/amazonwebservicesoriginalwordmark.svg'
import expressoriginalwordmark from '../assets/tech-icons/express/expressoriginalwordmark.svg'
import electronoriginalwordmark from '../assets/tech-icons/electron/electronoriginalwordmark.svg'



class Articles extends React.Component {
  render() {
    return (
      <div
        id="main"
        style={this.props.isArticleVisible ? { display: 'flex' } : { display: 'none' }}
        ref={wrapperRef=>this.wrapperRef=wrapperRef}
      >
        <article
          id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <ul className="skills-list">
            <li className="skills" >
              <img className="skills-icons" src ={reactoriginalwordmark} alt="React" />
            </li>
            <li className="skills">
              <img className="skills-icons" src ={javascriptoriginal} alt="Javascript"/>
            </li>
            <li className="skills">
              <img className="skills-icons" src ={html5originalwordmark} alt="HTML5"/>
            </li>
            <li className="skills">
              <img className="skills-icons" src ={css3originalwordmark} alt="CSS3"/>
            </li>
            <li className="skills">
              <img className="skills-icons" src ={nodejsoriginalwordmark} alt="Node.js"/>
            </li>
            <li className="skills">
              <img className="skills-icons" src ={Redux} alt="Redux"/>
            </li>
            <li className="skills">
              <img className="skills-icons" src ={gitoriginalwordmark} alt="Git/Github"/>
            </li>
            <li className="skills">
              <img className="skills-icons" src ={postgresqloriginalwordmark} alt="Postgres"/>
            </li>
            <li className="skills">
              <img className="skills-icons" src ={sassoriginal} alt="SASS"/>
            </li>
            <li className="skills">
              <img className="skills-icons" src ={webpackoriginalwordmark} alt="Webpack"/>
            </li>
            <li className="skills">
              <img className="skills-icons" src ={visualstudioplainwordmark} alt="Visual Studio"/>
            </li>
            <li className="skills">
              <img className="skills-icons" src ={amazonwebservicesoriginalwordmark} alt="Amazon Web Services"/>
            </li>
            <li className="skills">
              <img className="skills-icons" src ={expressoriginalwordmark} alt="Express"/>
            </li>
            <li className="skills">
              <img className="skills-icons" src ={electronoriginalwordmark} alt="Electron"/>
            </li>
          </ul>
        </article>


        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <a className="image main" href="https://github.com/Hack-Hub/Hack-Hub" rel="noopener noreferrer"  target="_blank">
            <img src={HHmockup} alt="" />
          </a>
          <h3>Hack Hub</h3>
          <a href="https://github.com/Hack-Hub/Hack-Hub" rel="noopener noreferrer"  target="_blank">hack-hub.tech</a>
          <p>
            Hack-Hub is a web application that recreates the Reddit style of
            content sharing but it’s built specifically for developers.
            <br />- Co-developed by two other students in the DevMountain
            course. <br />- Personally implemented the AWS image hosting and the
            Electron application along with my other contributions to the React
            codebase.
            <br />- Also utilized HTML, CSS, Javascript, React.js, Node,
            Express, and SQL.
          </p>
          <a className="image main" href="https://github.com/DavidDeArmon/Better-Habits" rel="noopener noreferrer"  target="_blank">
            <img src={BHmockup} alt="" />
          </a>
          <h3>Better Habits</h3>
          <a href="https://github.com/DavidDeArmon/Better-Habits" rel="noopener noreferrer"  target="_blank">better-habits.life</a>
          <p>
            Better Habits is a web application designed to help users be more
            mindful about their actions and help them make and keep habits.<br />
            -Learned and implemented non-required technologies like Google’s
            Firebase, Webpack, and Sass. <br />
            -The project won the “Most Technical” award in my DevMountain
            cohort.
            <br />
            -Also utilized HTML, CSS, Javascript, React.js, Redux, Node,
            Express, and SQL.
            <br />
          </p>
            <span className="image main">
              <img src={WebsiteGif} alt="" />
            </span>
          <h3>Gif Sentence Creator</h3>
          <a href="https://github.com/DavidDeArmon/noDB" rel="noopener noreferrer"  target="_blank">GitHub Repository</a>
          <p>
            This is a simple application that utilizes the GIPHY API to allow users to create sentences using Gifs!
            This is an early project of mine and it is an example of a merely front end application. There was no need for a database or back-end in this case.
            This app was built using React and axios.
            <br />
          </p>
        </article>

       {this.props.article === "about" && this.props.isArticleVisible && <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''}`}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={ProfilePic} alt="" />
          </span>
          <p>
          I am a full-stack web developer. After working towards electrical engineering for a couple years I discovered my passion for code. I graduated with my associates from Utah Valley University and went through DevMountain's web development program. When I'm not at work I like to get involved with technology with computer hardware and video games or participate in my community by volunteering.
          </p>
        </article>}

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="https://formspree.io/david.dearmon@gmail.com">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="_replyto" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://www.linkedin.com/in/david-dearmon/" className="icon fa-linkedin"  rel="noopener noreferrer"  target="_blank">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/DavidDeArmon" className="icon fa-github"  rel="noopener noreferrer" target="_blank">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
        </article>
      </div>
    )
  }
}

Articles.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  //setWrapperRef: PropTypes.func.isRequired,
}

export default Articles
