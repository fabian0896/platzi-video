import React from 'react';
import Search from '../components/search';

class SearchContainer extends React.Component{
    
    state = {
        value: 'Luis Fonsi'
    }

    handelSubmit = (e) => {
        e.preventDefault();
        console.log(this.element.value)
    }

    getRef = (element) =>{
        this.element = element;
    }

    handelInputChange = (e)=>{
        
        this.setState({
            value: e.target.value.replace(" ", "-")
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


export default SearchContainer;