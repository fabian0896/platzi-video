import React from 'react';
import Play from '../../icons/components/play'
import Pause from '../../icons/components/pause'
import './play-pause.css';

function PlayPause(props){
    return(
        <div className="PlayPause">
        {
            props.pause?
            <button onClick={ props.handelClick } >
                <Play size={ 25 } color="#FFF" />
            </button>
            :
            <button onClick={ props.handelClick }>
                <Pause size={ 25 } color="#FFF" />
            </button>
        }
        </div>
    )
}


export default PlayPause;