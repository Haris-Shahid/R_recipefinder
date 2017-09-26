import React,{ Component } from 'react' ;
import '../styles/index.css' ;

import Searchrecipe from './searchrecipe' ;
import RecipeList from './RecipeList' ;

class App extends Component{
    render() {
        return(
            <div>
                <h2>Recipe Finder</h2>
                <Searchrecipe />
                <RecipeList />
            </div>
        )
    }
}

export default App;