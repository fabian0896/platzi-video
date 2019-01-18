import React from 'react';
import './full-screen.css';
import FullScreenLogo from '../../icons/components/full-screen'

function FullScreen(props){
    return(
        <div onClick={ props.handelFullScreen }>
            <FullScreenLogo size={ 25 } color="#FFF" />
        </div>
    )
}

export default FullScreen;