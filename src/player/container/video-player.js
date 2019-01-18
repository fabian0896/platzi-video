import React from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';

class VideoPlayer extends React.Component{
    state = {
        pause: true
    }

    ToggleClick = ()=>{
        this.setState({
            pause: !this.state.pause
        })
    }

    componentDidMount(){
        this.setState({
            pause: (!this.props.autoplay)
        })
    }
    
    render(){
        return(
            <VideoPlayerLayout>
                <Title title="Video Prueba" />
                <PlayPause 
                    pause={ this.state.pause } 
                    handelClick={ this.ToggleClick }/>
                <Video
                    pause={ this.state.pause }
                    autoplay={ this.props.autoplay } 
                    src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" />
            </VideoPlayerLayout>
        )
    }
}


export default VideoPlayer;