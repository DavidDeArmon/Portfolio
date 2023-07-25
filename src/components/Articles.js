import React from 'react'
import PropTypes from 'prop-types'
import { withPrefix } from 'gatsby'

import HHmockup from '../assets/images/HHmockup.png'
import BHmockup from '../assets/images/BHmockup.png'
import ProfilePic from '../assets/images/ProfilePic.jpg';
import SentenceGenWebm from '../assets/images/Sentence800x600.webm'
import SentenceGenMP4 from '../assets/images/Sentence800x600.mp4'

import Redux from '../assets/images/Redux.png'
import csharpicon from '../assets/tech-icons/csharp/csharp-svgrepo-com.svg'
import dotneticon from '../assets/tech-icons/dotnet/dot-net-svgrepo-com.svg'
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
              <img className="skills-icons" src ={withPrefix(dotneticon)} alt="Dot Net" />
            </li>
            <li className="skills" >
              <img className="skills-icons" src ={withPrefix(csharpicon)} alt="C Sharp" />
            </li>
            <li className="skills" >
              <img className="skills-icons" src ={withPrefix(reactoriginalwordmark)} alt="React" />
            </li>
            <li className="skills">
              <img className="skills-icons" src ={withPrefix(javascriptoriginal)} alt="Javascript"/>
            </li>
            <li className="skills">
              <img className="skills-icons" src ={withPrefix(html5originalwordmark)} alt="HTML5"/>
            </li>
            <li className="skills">
              <img className="skills-icons" src ={withPrefix(css3originalwordmark)} alt="CSS3"/>
            </li>
            <li className="skills">
              <img className="skills-icons" src ={withPrefix(nodejsoriginalwordmark)} alt="Node.js"/>
            </li>
            <li className="skills">
              <img className="skills-icons" src ={withPrefix(Redux)} alt="Redux"/>
            </li>
            <li className="skills">
              <img className="skills-icons" src ={withPrefix(gitoriginalwordmark)} alt="Git/Github"/>
            </li>
            <li className="skills">
              <img className="skills-icons" src ={withPrefix(postgresqloriginalwordmark)} alt="Postgres"/>
            </li>
            <li className="skills">
              <img className="skills-icons" src ={withPrefix(sassoriginal)} alt="SASS"/>
            </li>
            <li className="skills">
              <img className="skills-icons" src ={withPrefix(webpackoriginalwordmark)} alt="Webpack"/>
            </li>
            <li className="skills">
              <img className="skills-icons" src ={withPrefix(visualstudioplainwordmark)} alt="Visual Studio"/>
            </li>
            <li className="skills">
              <img className="skills-icons" src ={withPrefix(amazonwebservicesoriginalwordmark)} alt="Amazon Web Services"/>
            </li>
            <li className="skills">
              <img className="skills-icons" src ={withPrefix(expressoriginalwordmark)} alt="Express"/>
            </li>
            <li className="skills">
              <img className="skills-icons" src ={withPrefix(electronoriginalwordmark)} alt="Electron"/>
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
          <h2 className="major">Projects</h2>
          <a className="image main" href="https://github.com/Hack-Hub/Hack-Hub" rel="noopener noreferrer"  target="_blank">
            <img src={withPrefix(HHmockup)} alt="" />
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
            <img src={withPrefix(BHmockup)} alt="" />
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
              <video width="95%" autoPlay={true} loop={true} muted={true} playsInline={true}>
                <source src={withPrefix(SentenceGenWebm)} type='video/webm'/>
                <source src={withPrefix(SentenceGenMP4)} type='video/mp4'/>
              </video>
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
            <img src={withPrefix(ProfilePic)} alt="" />
          </span>
          <p>
          I am a Full-stack Software and Web Developer with over 4 years of professional experience. I discovered my passion for programming while working towards a degree in electrical engineering. 
          I quickly graduated with my associates of science from Utah Valley University and went through DevMountain's web development program. 
          When I'm not at work I like to get involved with technology with computer hardware and video games, participate in my community by volunteering, or appreciating some good driving roads.
          </p>
        </article>}
     
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
