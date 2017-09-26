import React,{ Component } from 'react' ;
import { connect } from 'react-redux' ;

import RecipeItems from './RecipeItem' ;

import { Link } from 'react-router-dom' ;

class RecipeList extends Component {
    render() {
        // console.log('this.props',this.props.favoriteRecipes) ;
        return(
            <div>
                {
                    this.props.favoriteRecipes.length > 0 ?
                        <h4 className="link" >
                            <Link to='/FavoriteRecipes' >Favorite</Link>
                        </h4> :
                        <div></div>
                }
                {
                    this.props.recipes.map( (recipe,index) => {
                        return(
                            <RecipeItems key={index} recipe={recipe} favoriteButton={true} />
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return state ;
}

export default connect(mapStateToProps,null)(RecipeList);