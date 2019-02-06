import React, { PureComponent } from 'react';
import './generic-page.css';

class NotFound extends PureComponent {
  
  handlebackClick = ()=>{
    this.props.history.goBack();
  }
  
  handleForwardClick = ()=>{
    this.props.history.goForward();
  }
  handleRandomClick = ()=>{
    const randomID = Math.floor((Math.random() * 9) + 1);
    this.props.history.push(`/videos?id=${randomID}`, {id: randomID});
  }

  render() {
    return (
      <div className="Page NotFound">
        <h1>404</h1>
        <h3 className="SadFace">:(</h3>
        <h2>No hemos encontrado la página que buscabas</h2>
        <button className="Button" onClick={this.handleForwardClick}>
          Ir a la sigueinte pagina 
        </button>
        <button className="Button" onClick={this.handlebackClick} >
          ir a la ruta anterior 
        </button>
        <button className="Button" onClick={this.handleRandomClick} >
          ir a video random
        </button>
      </div>
    )
  }
}

export default NotFound