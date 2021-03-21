import classes from './MyPosts.module.css';
import React from "react";
import Post from './Posts/Post.jsx'

const MyPosts = () => {
    return (<div>
        My posts
        <div>
            <div>New posts</div>
            <textarea>Whats new? </textarea>
            <button>Add post</button>
        </div>
        <div className={classes.posts}>
            <Post/>
        </div>
    </div>)
}
export default MyPosts;
