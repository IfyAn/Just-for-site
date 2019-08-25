import React from 'react'
import Rainbow from '../HOC/Rainbow'

const About=()=>{
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Nostrum aliquid illo, dicta error cupiditate alias.</p>
        </div>
    )
}

export default Rainbow(About)