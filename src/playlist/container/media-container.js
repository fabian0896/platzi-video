import React from 'react';
import Media from '../components/media';
import { connect } from 'react-redux';


class MediaContainer extends React.Component{
    render(){
        return <Media openModal={ this.props.openModal } {...this.props.data.toJS()} />
    }
}


function mapStateToProps(state, props){
    return {
        data: state.get('data').get('entitis').get('media').get(props.id)
    }
}

export default connect(mapStateToProps)(MediaContainer);