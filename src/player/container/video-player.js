import React from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import { runInThisContext } from 'vm';
import Timer from '../components/timer';
import VideoPlayerControls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';

class VideoPlayer extends React.Component{
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false,
        volume: 1,
        savedVolume: 1,
        mutePressed: false,
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

    handelProgressBarChange = (e)=>{ 
        this.video.currentTime = e.target.value;
    }

    handelSeeked = ()=>{
        this.setState({
            loading: false,
            pause: false
        })
    }

    handelSeeking = ()=>{
        this.setState({
            loading: true,
            pause: true
        })
    }

    handelChangeVolume = (e)=>{
        this.setState({
            volume: e.target.value
        });
        this.video.volume = this.state.volume;
    }

    handelMute = (e)=>{
        if(e.target.name === 'range') return;
        
        if(!this.state.mutePressed){
            this.setState({
                mutePressed: true,
                volume: 0,
                savedVolume: this.video.volume
            })
            this.video.volume = 0;
        } else{
            this.setState({
                mutePressed: false,
                volume: this.state.savedVolume
            })
            this.video.volume = this.state.savedVolume;
        }
    }

    setRef = element =>{
        this.player = element;
        console.log(this.player);
    }

    handelFullScreen = ()=>{
        if(!document.webkitIsFullScreen){
            this.player.webkitRequestFullScreen();
        } else{
            document.webkitExitFullscreen();
        }
    }
    
    render(){
        return(
            <VideoPlayerLayout setRef={ this.setRef }>
                <Title title="Video Prueba" />
                <VideoPlayerControls>
                    <PlayPause 
                        pause={ this.state.pause } 
                        handelClick={ this.ToggleClick }/>
                    <Timer
                        currentTime = { this.state.currentTime }
                        duration={ this.state.duration }/>
                    <ProgressBar
                        handelProgressBarChange ={ this.handelProgressBarChange }
                        currentTime={ this.state.currentTime } 
                        duration={ this.state.duration }/>
                    <Volume
                       handelMute = { this.handelMute }  
                       volume={ this.state.volume }
                       handelChangeVolume={ this.handelChangeVolume }
                    />
                    <FullScreen handelFullScreen = { this.handelFullScreen } />
                </VideoPlayerControls> 
                {
                    this.state.loading &&
                    <Spinner />
                }
                <Video
                    handelSeeked = { this.handelSeeked }
                    handelSeeking = { this.handelSeeking }
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