import dataApi from '../schemas/index';
import { fromJS } from 'immutable'



const initialState = fromJS({
    entitis: dataApi.entities,
    categories: dataApi.result.categories,
    search: ''
})



function data(state = initialState, action){
    switch(action.type){
        case 'SEARCH_VIDEO':{
            /* let results = [];
            const list = state.data.categories[2].playlist;
            if (action.payload.query){
                results = list.filter((item)=>{
                    return item.author.toLocaleLowerCase().includes(action.payload.query.toLocaleLowerCase());
                });
            }
            return {
                ...state,
                search: results
            }; */
            return state.set('search', action.payload.query)
        }

        default:
            return state;
    }
}


export default data;