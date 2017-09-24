import React, { Component } from 'react' ;

import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap' ;

import { connect } from 'react-redux' ;

import { setRecipes } from '../actions' ;

class Searchrecipe extends Component {
    constructor(){
        super() ;
        this.state = {
            ingredients: '' ,
            dish: ''
        }
    }

    search(){
        const { ingredients, dish } = this.state ;
        const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}` ; 
        // console.log('state' , this.state)
        // console.log('url' , url ) 
        fetch(url , {
            method: 'GET'
        })
        .then( res => res.json())
        .then( json => 
            // console.log('receipe' , json)
            this.props.setRecipes(json.results)
        )
    }

    render() {
        return(
            <Form inline >
                <FormGroup>
                    <ControlLabel>Ingredients</ControlLabel>
                    {' '}
                    <FormControl type='text' placeholder='garlic,chicken' onChange={(event) => this.setState({ ingredients:event.target.value })} />
                </FormGroup>
                {' '}
                <FormGroup>
                    <ControlLabel>Dish</ControlLabel>
                    {' '}
                    <FormControl type='text' placeholder='adobo' onChange={event => this.setState({ dish:event.target.value})} />
                </FormGroup>
                    {' '}
                    <Button onClick={() => this.search()} >Submit</Button>
            </Form>
        )
    }
}

export default connect(null ,{setRecipes})(Searchrecipe) ;



