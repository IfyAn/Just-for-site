import React from 'react'

const Rainbow=(WrappedComponent)=>{

    const colours=['green', 'red', 'yellow', 'blue', 'violet', 'black'];
    const randomColour= colours[Math.floor(Math.random() * 5)];
    const className= randomColour + '-text';

    return(pimp)=>{
        return(
            <div className={className}>
                <WrappedComponent{...pimp} />
            </div>
        )
    }
}

export default Rainbow