import React from 'react';
import './timer.css';


function formattedTime(sec){
    const min =  Math.floor(sec/60);
    const seconds = Math.trunc(sec - (min*60)); 
    return `${ converToZeros(min) }:${ converToZeros(seconds)}`
}

const converToZeros = (num) => num <= 9 ? '0'+num: num; 



function Timer(props){
    return(
        <div className="Timer">
            <p>
                <span>{ formattedTime(props.currentTime) } / { formattedTime(props.duration) }</span>
            </p>
        </div>
    )
}


export default Timer;