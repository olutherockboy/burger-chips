import React from 'react';
import classes from '../BuildControls/BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';


const controls= [
    {label:'Salad', type: 'salad'},
    {label:'Bacon', type: 'bacon'},
    {label:'Cheese', type: 'cheese'},
    {label:'Meat', type: 'meat'}
]

const buildControls = (props)=>(
    <div className={classes.BuildControls}>
        <strong>Price:{props.price.toFixed(2)}</strong>
{controls.map(ctrl=>{ return <BuildControl 
                              addIngredient={() => props.addIngredient(ctrl.type)} 
                              removeIngredient={()=>props.removeIngredient(ctrl.type)}
                              key={ctrl.type + Math.random } label={ctrl.label} 
                              disableIngredient={props.disableIngredients[ctrl.type]}
                              />})}
                            <button    disabled={!props.purchase} className={classes.OrderButton} >ORDER NOW</button>
    </div>

);

export default buildControls;