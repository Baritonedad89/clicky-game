import React from 'react'

const Wrapper = props => {
    return (
        <div className="container">
            <div className='row'>
                {props.children}
            </div>
        </div>
    )

}


export default Wrapper 