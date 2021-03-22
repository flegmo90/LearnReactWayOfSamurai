import classes from './MyPosts.module.css';
import React from "react";
import Post from './Posts/Post.jsx'

const MyPosts = (props) => {
    return (<div>
        My posts
        <div>
            <div>New posts</div>
            <textarea className={classes.textarea}>Whats new? </textarea>
            <button className={classes.button}>Add post</button>
        </div>
        <div className={classes.posts}>
            <Post message="Hi, how are you?" likecounts="15"/>
            <Post message="It's my first post" likecounts="20"/>
        </div>
    </div>)
}
export default MyPosts;
