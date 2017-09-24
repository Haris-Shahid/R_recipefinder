import React,{ Component } from 'react' ;
import '../styles/index.css' ;

import Searchrecipe from './searchrecipe' ;
import RecipeList from './RecipeList' ;
import {FavoriteRecipeList} from './favoriterecipelist' ;

class App extends Component{
    render() {
        return(
            <div>
                <h2>Recipe Finder</h2>
                <Searchrecipe />
                <RecipeList />
                <FavoriteRecipeList />
            </div>
        )
    }
}

export default App;