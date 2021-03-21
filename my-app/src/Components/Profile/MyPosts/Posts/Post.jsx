import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img src='https://im0-tub-ru.yandex.net/i?id=b8223fdf12824f068df02558092361e2&n=13'/>
            Post
            <div>Like</div>
        </div>
    )
}

export default Post;
