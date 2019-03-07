import React from 'react'
import "./style.css";


export function Card(props) {
    return (

        <div className="col l3">
            <div className="card">
                <div className="card-image">
                    <img className="img-size" id={props.id} onClick={() => props.handleClick(props.id)} src={props.url} alt="Stan's Donuts"  />
                </div>
            </div>
        </div>
    )

}

