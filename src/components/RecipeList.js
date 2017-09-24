import React,{ Component } from 'react' ;
import { connect } from 'react-redux' ;

import RecipeItems from './RecipeItem' ;

class RecipeList extends Component {
    render() {
        // console.log('this.props',this.props) ;
        return(
            <div>
                {
                    this.props.recipes.map( (recipe,index) => {
                        return(
                            <RecipeItems key={index} recipe={recipe} />
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