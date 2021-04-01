import React from 'react';
import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
        /*        <NavLink to={path} activeClassName={classes.active}>
                    <div className={classes.dialog}>
                        {props.name}
                    </div>
                </NavLink>*/

        /*        <NavLink className={classes.dialog} to={path} activeClassName={classes.active}>{props.name}</NavLink>*/

    )
}

export default DialogItem;
