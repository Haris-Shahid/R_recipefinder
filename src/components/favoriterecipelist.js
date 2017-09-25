import React, { Component } from 'react' ;
import { connect } from 'react-redux' ;
import RecipeItems from './RecipeItem' ;

export class FavoriteRecipeList extends Component {
  render() {
      console.log('favorite recipe',this.props.favoriteRecipe)
      return (
          <div>
              <h4>Favorite Recipes: </h4>
              {
                this.props.favoriteRecipes.map( (recipe ,index) => {
                  return(
                    <RecipeItems key={index} recipe={recipe} />
                    )
                })
              }
          </div>
      )
  }
}

function mapStateToProps(state) {
    return {
      favoriteRecipes: state.favoriteRecipes
    }
}

export default connect(mapStateToProps, null)(FavoriteRecipeList)
