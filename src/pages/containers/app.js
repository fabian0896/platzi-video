import React, { Fragment } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../reducers/index.js'
import { Map as map } from 'immutable';
import  { Route, Switch, Redirect } from 'react-router-dom'



import Videos from '../../pages/containers/home';
import Header from '../../pages/components/header';
import Home from '../../pages/components/home';
import Contact from '../../pages/components/contact';
import NotFound from '../../pages/components/not-found'


const store = createStore(reducer, map());

class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
            <Fragment>
                <Header/>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/videos" component={ Videos } />
                    <Redirect from="/v" to="/videos" />
                    <Route exact path="/contacto" component={ Contact } />
                    <Route component={ NotFound } />
                </Switch>
            </Fragment>
        </Provider>
        )
    }
}

export default App;
   
