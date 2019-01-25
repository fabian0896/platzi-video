import React from 'react';
import Media from '../components/media';
import { connect } from 'react-redux';


class MediaContainer extends React.Component{
    render(){
        return <Media openModal={ this.props.openModal } {...this.props.data} />
    }
}


function mapStateToProps(state, props){
    return {
        data: state.data.entitis.media[props.id]
    }
}

export default connect(mapStateToProps)(MediaContainer);