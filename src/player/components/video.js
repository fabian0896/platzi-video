import React from 'react';
import './video.css';

class Video extends React.Component{
    componentWillReceiveProps(nextProps){
        if(nextProps.pause !== this.props.pause){
            this.togglePlay();
        }
    }

    togglePlay(){
        if(this.props.pause){
            this.video.play();
        } else{
            this.video.pause();
        }
    }

    setRef = (elemet)=>{
        this.video = elemet;
    }

    render(){
        const { handelLoadedMetadata, 
                handelTimeUpdate,
                handelSeeked,
                handelSeeking } = this.props;
        return(
            <video className="Video"
                autoPlay={ this.props.autoplay }   
                src={ this.props.src }
                ref = { this.setRef }
                onLoadedMetadata={ handelLoadedMetadata }
                onTimeUpdate={ handelTimeUpdate }
                onSeeking = { handelSeeking }
                onSeeked ={ handelSeeked }
            />
        )
    }
}

export default Video;