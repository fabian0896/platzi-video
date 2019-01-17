import React from 'react';
import Media from './media';
import './playlist.css';


class Playlist extends React.Component{

    render(){
        return(
            <div className="hidder">
                <div className="playlist">
                    {
                        this.props.playlist.map((video)=>{
                            return <Media {...video}  key={video.id} />
                        }) 
                    }
                </div>
            </div>
        )
    }
}

export default Playlist;