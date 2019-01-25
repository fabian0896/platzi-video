import React from 'react';
// import Media from './media';
import './playlist.css';
import Media from '../container/media-container';



class Playlist extends React.Component{

    render(){
        return(
            <div className="playlist">
                {
                    this.props.playlist.map((video)=>{
                        return <Media openModal={this.props.handelOpenModal} id={video}  key={video} />
                    }) 
                }
            </div>
        )
    }
}

export default Playlist;