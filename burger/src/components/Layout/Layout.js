import React, { Component } from 'react';
import Aux from '../../containers/hoc/Auxx';
import classes from '../../components/Layout/Layout.module.css';

const layout = (props) =>  (
    <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>  
    </Aux>
    

)

export default layout;