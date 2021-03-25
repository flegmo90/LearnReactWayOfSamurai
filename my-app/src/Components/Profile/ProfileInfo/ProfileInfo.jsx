import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={classes.ava_inf}>
            <img src='https://w-dog.ru/wallpapers/1/31/464217882479635/tvorchestvo-solncezashhitnye-ochki-kot.jpg'/> +
            info
        </div>
    )
}
export default ProfileInfo;
