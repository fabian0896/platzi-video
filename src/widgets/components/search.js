import React from 'react';
import './search.css';




class Search extends React.Component{
    render(){
        return(
            <div className="Search">
                <form onSubmit={ this.props.handelSubmit }>
                    <input
                        ref={ this.props.setRef }
                        placeholder="Busca tu video favorito" 
                        className="Search-input" 
                        type="text"
                        onChange={ this.props.handelChange }
                        value={ this.props.value } />
                </form>
            </div>
        )
    }
}


export default Search;