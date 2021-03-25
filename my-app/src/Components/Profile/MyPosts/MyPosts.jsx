import classes from './MyPosts.module.css';
import React from "react";
import Post from './Posts/Post.jsx'

const MyPosts = (props) => {
    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: '15'},
        {id: 2, message: 'It\'s my first post', likesCount: '20'},
    ]

    let postsElements = posts.map(
        post => <Post message={post.message} likesCount={post.likesCount}/>
    )

    return (<div>
        My posts
        <div>
            <div>New posts</div>
            <textarea className={classes.textarea}>Whats new? </textarea>
            <button className={classes.button}>Add post</button>
        </div>
        <div className={classes.posts}>
            {postsElements}
        </div>
    </div>)
}
export default MyPosts;
