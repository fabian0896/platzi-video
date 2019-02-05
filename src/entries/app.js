import React, { Fragment } from 'react';
import { render } from 'react-dom';
import Videos from '../pages/containers/home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/index.js'
// import data from '../schemas/index';
import { Map as map } from 'immutable';

import  { BrowserRouter, Route } from 'react-router-dom'

import Header from '../pages/components/header';

import Home from '../pages/components/home';
import Contact from '../pages/components/contact';
import NotFound from '../pages/components/not-found'


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
<BrowserRouter>
    <Provider store={store}>
        <Fragment>
            <Header/>
            <Route exact path="/" component={ Home } />
            <Route exact path="/videos" component={ Videos } />
            <Route exact path="/contacto" component={ Contact } />
            <Route component={ NotFound } />
        </Fragment>
    </Provider>
</BrowserRouter>
,
document.getElementById('app'));