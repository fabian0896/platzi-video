import React from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import { runInThisContext } from 'vm';
import Timer from '../components/timer';
import VideoPlayerControls from '../components/video-player-controls';

class VideoPlayer extends React.Component{
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
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

    handelLoadedMetadata = (event)=>{
        this.video = event.target;
        this.setState({
            duration: this.video.duration
        })
    }

    handelTimeUpdate = (event)=>{
        this.setState({
            currentTime: this.video.currentTime
        })
    }
    
    render(){
        return(
            <VideoPlayerLayout>
                <Title title="Video Prueba" />
                <VideoPlayerControls>
                    <PlayPause 
                        pause={ this.state.pause } 
                        handelClick={ this.ToggleClick }/>
                    <Timer
                        currentTime = { this.state.currentTime }
                        duration={ this.state.duration }/>
                </VideoPlayerControls> 
                <Video
                    handelTimeUpdate = { this.handelTimeUpdate }
                    handelLoadedMetadata={ this.handelLoadedMetadata }
                    pause={ this.state.pause }
                    autoplay={ this.props.autoplay } 
                    src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" />
            </VideoPlayerLayout>
        )
    }
}


export default VideoPlayer;