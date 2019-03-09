import React from 'react'
import "./style.css";


export function Donut(props) {
    return (

        <div className="col l3 m4 s4">
                    <img className="img-size" id={props.id}  onClick={() => props.handleClick(props.id)} src={props.url} alt="Stan's Donuts"  />
                </div>
        
    )

}

