import React, { Component } from 'react' ;
import { connect } from 'react-redux' ;
import RecipeItems from './RecipeItem' ;

export class FavoriteRecipeList extends Component {
  render() {
      console.log('favorite recipe',this.props.favoriteRecipe)
      return this.props.favoriteRecipe.map( (recipe ,index) => {
              return(
                  <RecipeItems key={index} recipe={recipe} />
                )
            })
  }
}

function mapStateToProps(state){
    return {
        favoriteRecipe: state.favoriteRecipes
    }
}

export default connect(mapStateToProps, null )(FavoriteRecipeList);
