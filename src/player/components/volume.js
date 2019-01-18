import React from 'react';
import VolumeIcon from '../../icons/components/volume';
import './volume.css'

function Volume(props){
    return(
        <button onClick={ props.handelMute } className="Volume">
            <VolumeIcon 
                size={ 25 } 
                color="#FFF"/>

            <div className="Volume-range">
                <input
                name="range" 
                type="range"
                min={0}
                max={1}
                step={.05}
                value={ props.volume }
                onChange={ props.handelChangeVolume}/>
            </div>
            
        </button>
    )
}


export default Volume;