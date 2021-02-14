import React, { Component } from 'react';
import classes from '../Burger/Burger.module.css';

import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {

    

    let transformedIngredients = Object.keys(props.type)

    .map( igkey =>{ 
       return [...Array(props.type[igkey])].map((_,i) => {
       return <BurgerIngredient key={igkey+i} type={igkey}/>
    })

   

}).reduce((t,c)=>{ return t.concat(c)}) 

if (transformedIngredients.length == 0) {
    transformedIngredients = <p>Please add Ingredients</p>
    
}



return (

  

    <div  id="test "className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
         {transformedIngredients}
         <BurgerIngredient type="bread-bottom"/>
    </div>
 );

}

export default burger;