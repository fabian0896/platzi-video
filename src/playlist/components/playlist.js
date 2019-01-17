import React from 'react';
import Media from './media';
import './playlist.css';


class Playlist extends React.Component{

    render(){
        return(
            <div className="playlist">
                {
                    this.props.playlist.map((video)=>{
                        return <Media handelClick={this.props.handelOpenModal} {...video}  key={video.id} />
                    }) 
                }
            </div>
        )
    }
}

export default Playlist;