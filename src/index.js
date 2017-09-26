import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import FavoriteRecipeList from './components/favoriterecipelist' ;

import { createStore } from 'redux' ;
import { Provider } from 'react-redux' ;
import rootReducers from './reducers' ;

import { BrowserRouter , Switch, Route } from 'react-router-dom' ;

const store = createStore(rootReducers) ;

store.subscribe(() => console.log("store",store.getState())) ;

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/FavoriteRecipes' component={FavoriteRecipeList} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
