import React from 'react';
import classes from './Like.module.css';


const Like = (props) => {
    return (
        <div className={classes.like}>
            <img src='https://im0-tub-ru.yandex.net/i?id=8249fcf4b77c4124e1fac892250d3c25&n=13'/>
            Likes{props.likesCount}
        </div>
    )
}

export default Like;
