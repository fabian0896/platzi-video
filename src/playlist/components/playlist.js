import React from 'react';
import Media from './media';
import './playlist.css';

class Playlist extends React.Component{

    state = {
        playlist: this.props.data.categories[0].playlist
    }

    render(){
        return(
            <div className="hidder">
                <div className="playlist">
                    {
                        this.state.playlist.map((video)=>{
                            return <Media {...video}  key={video.id} />
                        }) 
                    }
                </div>
            </div>
        )
    }
}

export default Playlist;