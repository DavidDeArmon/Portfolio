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
                        <a href="https://github.com/DavidDeArmon" className="icon fa-github" target="_blank" rel="noopener noreferrer" aria-label="GitHub" >
                            <span className="label"> GitHub</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/david-dearmon/" className="icon fa-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" >
                            <span className="label"> LinkedIn</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <nav>
            <ul>
                <li><button onClick={(e) => { props.onOpenArticle('skills', e) }}>Skills</button></li>
                <li><button onClick={(e) => { props.onOpenArticle('work', e) }}>Projects</button></li>
                <li><button onClick={(e) => { props.onOpenArticle('about', e) }}>About</button></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
