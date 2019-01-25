import React from 'react';
import Category from './category';
import './categories.css';
import Search from '../../widgets/components/search';
import SearchContainer from '../../widgets/containers/search-container';
import Media from '../../playlist/components/media'

function Categories(props){
    return(
        <div className="Categories">
            <SearchContainer />
            {
                props.search.map((item) =>{
                    return <Media key={item.id} {...item} />
                })
            }
            {
                props.categories.map((item)=>{
                    return <Category handelOpenModal={ props.handelOpenModal }  key={item.id} {...item}/>
                })
            }
        </div>
    );
}


export default Categories;