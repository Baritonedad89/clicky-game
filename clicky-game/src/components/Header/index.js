import React from 'react'

const Header = props => {
    return (
        
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>Score: {props.score} | Top Score: {props.topScore}</li>
                </ul>
            </div>
        </nav>
    )

}

export default Header 