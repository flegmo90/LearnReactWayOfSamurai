import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
    return <div className={classes.profile}>
        <div>
            <img src='https://png.pngtree.com/back_origin_pic/02/68/42/9f6ae2e58c08b59e72385852647b1b0b.jpg'/>
        </div>
        <div className={classes.ava_inf}>
            <img src='https://w-dog.ru/wallpapers/1/31/464217882479635/tvorchestvo-solncezashhitnye-ochki-kot.jpg'/> +
            info
        </div>
        <div>
            My posts
            <div>
                New posts
            </div>
            <div className={classes.posts}>
                <div className={classes.item}>
                    Post 1
                </div>
                <div className={classes.item}>
                    Post 2
                </div>
            </div>
        </div>
    </div>
}
export default Profile;
