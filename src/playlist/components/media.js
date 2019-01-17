import React from 'react';
import './media.css';

class Media extends React.Component{
    
    state = {
        title: this.props.title,
        author: this.props.author,
        image: this.props.cover
    }
    
    render(){
        return(
            <div className="Media">
                <div className="Media-cover">
                    <img className="Media-image" width={260} height={160} src={ this.state.image } alt={this.state.title}></img>
                    <h3 className="Media-title" >{ this.state.title }</h3>
                    <p className="Media-author">{ this.state.author }</p>
                </div>
            </div>
        )
    }
}


export default Media;