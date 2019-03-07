import React from 'react'
import "./style.css";

const Wrapper = props => {
    return (
        <div className="container">
        {/* passing in a prop to toggle the shake animation  */}
            <div className={`row ${props.style || null }`}>
                {props.children}
            </div>
        </div>
    )

}


export default Wrapper 