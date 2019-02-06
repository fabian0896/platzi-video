import React from 'react';
import Search from '../components/search';
import { connect } from 'react-redux'

class SearchContainer extends React.Component{
    
    state = {
        value: ''
    }

    handelSubmit = (e) => {
        e.preventDefault();
        console.log(this.element.value);
        this.props.dispatch({
            type: 'SEARCH_VIDEO',
            payload: {
                query: this.element.value
            }
        })
    }

    getRef = (element) =>{
        this.element = element;
    }

    handelInputChange = (e)=>{
        this.setState({
            value: e.target.value
        })
    }

    render(){
        return(
           <Search 
                setRef={ this.getRef } 
                handelSubmit={ this.handelSubmit }
                handelChange={ this.handelInputChange }
                value= { this.state.value }/>
        )
    }
}


export default connect()(SearchContainer);