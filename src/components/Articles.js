import React from 'react'
import PropTypes from 'prop-types'
import { withPrefix } from 'gatsby'

import HHmockup from '../assets/images/HHmockup.webp'
import BHmockup from '../assets/images/BHmockup.webp'
import ProfilePic from '../assets/images/profilePhotoSquare.webp'
import SentenceGenWebm from '../assets/images/Sentence800x600.webm'
import SentenceGenMP4 from '../assets/images/Sentence800x600.mp4'

import Redux from '../assets/images/Redux.webp'
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
        ref={wrapperRef => this.wrapperRef = wrapperRef}
      >
        <article
          id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <ul className="skills-list">
            <li className="skills" >
              <img className="skills-icons" src={withPrefix(dotneticon)} alt="Dot Net" loading="lazy" />
            </li>
            <li className="skills" >
              <img className="skills-icons" src={withPrefix(csharpicon)} alt="C Sharp" loading="lazy" />
            </li>
            <li className="skills" >
              <img className="skills-icons" src={withPrefix(reactoriginalwordmark)} alt="React" loading="lazy" />
            </li>
            <li className="skills">
              <img className="skills-icons" src={withPrefix(javascriptoriginal)} alt="Javascript" loading="lazy" />
            </li>
            <li className="skills">
              <img className="skills-icons" src={withPrefix(html5originalwordmark)} alt="HTML5" loading="lazy" />
            </li>
            <li className="skills">
              <img className="skills-icons" src={withPrefix(css3originalwordmark)} alt="CSS3" loading="lazy" />
            </li>
            <li className="skills">
              <img className="skills-icons" src={withPrefix(nodejsoriginalwordmark)} alt="Node.js" loading="lazy" />
            </li>
            <li className="skills">
              <img className="skills-icons" src={withPrefix(Redux)} alt="Redux" loading="lazy" />
            </li>
            <li className="skills">
              <img className="skills-icons" src={withPrefix(gitoriginalwordmark)} alt="Git/Github" loading="lazy" />
            </li>
            <li className="skills">
              <img className="skills-icons" src={withPrefix(postgresqloriginalwordmark)} alt="Postgres" loading="lazy" />
            </li>
            <li className="skills">
              <img className="skills-icons" src={withPrefix(sassoriginal)} alt="SASS" loading="lazy" />
            </li>
            <li className="skills">
              <img className="skills-icons" src={withPrefix(webpackoriginalwordmark)} alt="Webpack" loading="lazy" />
            </li>
            <li className="skills">
              <img className="skills-icons" src={withPrefix(visualstudioplainwordmark)} alt="Visual Studio" loading="lazy" />
            </li>
            <li className="skills">
              <img className="skills-icons" src={withPrefix(amazonwebservicesoriginalwordmark)} alt="Amazon Web Services" loading="lazy" />
            </li>
            <li className="skills">
              <img className="skills-icons" src={withPrefix(expressoriginalwordmark)} alt="Express" loading="lazy" />
            </li>
            <li className="skills">
              <img className="skills-icons" src={withPrefix(electronoriginalwordmark)} alt="Electron" loading="lazy" />
            </li>
          </ul>
        </article>


        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <a className="image main" href="https://github.com/Hack-Hub/Hack-Hub" rel="noopener noreferrer" target="_blank">
            <img src={withPrefix(HHmockup)} alt="" loading="lazy" />
          </a>
          <h3>Hack Hub</h3>
          <a href="https://github.com/Hack-Hub/Hack-Hub" rel="noopener noreferrer" target="_blank">hack-hub.tech</a>
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
          <a className="image main" href="https://github.com/DavidDeArmon/Better-Habits" rel="noopener noreferrer" target="_blank">
            <img src={withPrefix(BHmockup)} alt="" loading="lazy" />
          </a>
          <h3>Better Habits</h3>
          <a href="https://github.com/DavidDeArmon/Better-Habits" rel="noopener noreferrer" target="_blank">better-habits.life</a>
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
          <video width="95%" autoPlay={true} loop={true} muted={true} playsInline={true} >
            <source src={withPrefix(SentenceGenWebm)} type='video/webm' />
            <source src={withPrefix(SentenceGenMP4)} type='video/mp4' />
          </video>
          <h3>Gif Sentence Creator</h3>
          <a href="https://github.com/DavidDeArmon/noDB" rel="noopener noreferrer" target="_blank">GitHub Repository</a>
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
            <img src={ProfilePic} alt="" loading="lazy" />
          </span>
          <p>
            <b>Hi, I'm David</b>.
            <br /><br />
            I am a Full Stack Software Developer with over 4 years of professional experience creating and maintaining multi-platform applications. I am capable of quickly learning and gaining competency with new technologies and systems to provide valuable insight and contributions to projects. I am comfortable engineering and implementing on the Front-End, Server-side, or interacting directly with a Database. Top to bottom understanding is crucial to developing high quality solutions that are maintainable for years to come.
            <br /><br />
            I have always loved technology but I initially resisted making it my career. After spending time in college exploring my professional interests I discovered how satisfying the programming process is. I love to problem solve and it turns out that Software Development is rewarding no matter the project. Getting paid to solve other people's problems requires programming skills that I found at DevMountain’s Web Development course. In their immersive 40+ hour week course,  I learned the practical skills of developing modern web applications over 13 weeks. After graduation I honed my craft on any project that I could find. Alongside my personal projects I was able to assist several friends and family members by developing websites and apps for them. With some real-world experience under my belt I was hired as a full time Software Developer in May 2019. During my 4 year tenure I contributed by removing copious technical debt and developing new features for our Saas product.
            <br /><br />
            My personal life also centers around technology. Many of my hobbies are related to technology. I enjoy PC gaming and the associated computer hardware, I build my own desktop PCs and have assisted my friends in building their own as well. I love the recent trend of games that incorporate real programming like BitBurner which let players automate game functions by using Javascript.
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
}

export default Articles
