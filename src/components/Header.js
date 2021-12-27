import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.isArticleVisible ? {display: 'none'} : {}}>
        <div className="content">
            <div className="inner">
                <h1>David DeArmon</h1>
                <p>Fullstack Web Developer</p>
                <p><a href="https://github.com/DavidDeArmon" target="_blank"  rel="noopener noreferrer">Github</a></p>
                <p><a href="https://www.linkedin.com/in/david-dearmon/" target="_blank"  rel="noopener noreferrer">LinkedIn</a></p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a role="button" href="#skills" onClick={(e) => {props.onOpenArticle('skills',e)}}>Skills</a></li>
                <li><a role="button" href="#work" onClick={(e) => {props.onOpenArticle('work',e)}}>Work</a></li>
                <li><a role="button" href="#about" onClick={(e) => {props.onOpenArticle('about',e)}}>About</a></li>
                <li><a role="button" href="#contact" onClick={(e) => {props.onOpenArticle('contact',e)}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
