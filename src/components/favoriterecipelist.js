import React, { Component } from 'react' ;
import { connect } from 'react-redux' ;
import RecipeItems from './RecipeItem' ;

import { Link } from 'react-router-dom' ;

class FavoriteRecipeList extends Component { 
    render() {
    //   console.log('favorite recipe',this.props.favoriteRecipes)
      return (
          <div>
              <h4>Favorite Recipes: </h4>
              <h4 className="link" >
                    <Link to='/' >Home</Link>
              </h4>
              {
                this.props.favoriteRecipes.map( (recipe,index) => {
                    return(
                        <RecipeItems key={index} recipe={recipe} favoriteButton={false} />
                    )
                })
            }
          </div>
      )
  }
}

function mapStateToProps(state){
    return {
        favoriteRecipes: state.favoriteRecipes 
    } ;
}

export default connect(mapStateToProps,null)(FavoriteRecipeList);
