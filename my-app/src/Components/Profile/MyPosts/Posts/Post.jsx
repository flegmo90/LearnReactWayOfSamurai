import React from 'react';
import classes from './Post.module.css';
import Like from './Like/Like';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://im0-tub-ru.yandex.net/i?id=b8223fdf12824f068df02558092361e2&n=13'/>
            <span>{props.message}</span>
            <Like likecounts={props.likecounts}/>
        </div>
    )
}

export default Post;
