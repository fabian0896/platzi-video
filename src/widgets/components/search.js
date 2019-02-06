import React from 'react';
import './search.css';
import { Prompt } from 'react-router'



class Search extends React.Component{
    render(){
        return(
            <div className="Search">
                <Prompt when={!!(this.props.value.length)}  message="Estas seguro que deseas dejar la pagina?" />
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