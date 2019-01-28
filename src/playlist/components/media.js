import React from 'react';
import './media.css';
import { connect } from 'react-redux'

class Media extends React.Component{
    
    state = {
        title: this.props.title,
        author: this.props.author,
        image: this.props.cover
    }

    // handelClick = ()=>{
    //     this.props.openModal(this.props);
    // }

    handelClick = () =>{
        console.log('open')
        this.props.dispatch({
            type: 'OPEN_MODAL',
            payload: {
                visibility: true,
                mediaId: this.props.id
            }
        });
    }

    
    render(){
        return(
            <div className="Media" onClick={ this.handelClick }>
                <div className="Media-cover">
                    <img className="Media-image" width={260} height={160} src={ this.state.image } alt={this.state.title}></img>
                    <h3 className="Media-title" >{ this.state.title }</h3>
                    <p className="Media-author">{ this.state.author }</p>
                </div>
            </div>
        )
    }
}


export default connect()(Media);