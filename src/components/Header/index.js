import React from 'react'
import "./style.css";

const Header = props => {
    return (

        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper pink lighten-3">
                    <a href="/" className={`brand-logo center ${props.blinkerStyle || null } ${props.messageStyle || 'black-text' }`}>{props.message}</a>

                    <ul id="nav-mobile" className="right hide-on-med-and-down light-blue-text lighten-3">
                        <li className="scores">Score: {props.score} | Top Score: {props.topScore}</li>
                    </ul>
                </div>
            </nav>
        </div>

    )

}

export default Header 