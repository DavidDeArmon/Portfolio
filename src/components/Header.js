import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.isArticleVisible ? { display: 'none' } : {}}>
        <div className="content">
            <div className="inner">
                <h1>David DeArmon</h1>
                <p>Software Developer</p>
                <ul className="icons">
                    <li>
                        <a href="https://github.com/DavidDeArmon" className="icon fa-github" target="_blank" rel="noopener noreferrer" >
                            <span className="label"> GitHub</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/david-dearmon/" className="icon fa-linkedin" target="_blank" rel="noopener noreferrer" >
                            <span className="label"> LinkedIn</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <nav>
            <ul>
                <li><a role="button" href="#skills" onClick={(e) => { props.onOpenArticle('skills', e) }}>Skills</a></li>
                <li><a role="button" href="#work" onClick={(e) => { props.onOpenArticle('work', e) }}>Projects</a></li>
                <li><a role="button" href="#about" onClick={(e) => { props.onOpenArticle('about', e) }}>About</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
