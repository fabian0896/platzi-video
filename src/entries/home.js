import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/index.js'
// import data from '../schemas/index';
import { Map as map } from 'immutable';

/* const initialState = {
    data: {
        entitis: data.entities,
        categories: data.result.categories,
        search: []
    },
    modal:{
        visibility: false,
        mediaId = null
    }
} */

const store = createStore(reducer, map(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
<Provider store={store}>
    <Home />
</Provider>,
document.getElementById('app'));