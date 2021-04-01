import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return <div className={classes.profile}>
        <div>
            <img alt="" src='https://png.pngtree.com/back_origin_pic/02/68/42/9f6ae2e58c08b59e72385852647b1b0b.jpg'/>
        </div>
        <ProfileInfo/>
        <MyPosts posts={props.state.posts}/>
    </div>
}
export default Profile;
