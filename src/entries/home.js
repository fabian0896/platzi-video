import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/data.js'
import data from '../schemas/index';


const initialState = {
    data: {
        entitis: data.entities,
        categories: data.result.categories
    },
    search: []
}

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
<Provider store={store}>
    <Home />
</Provider>,
document.getElementById('app'));