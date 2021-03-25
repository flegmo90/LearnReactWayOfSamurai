import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>

            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Дима'},
        {id: 2, name: 'Саша'},
        {id: 3, name: 'Света'},
        {id: 4, name: 'Ира'},
        {id: 5, name: 'Костя'}
    ]

    let messageData = [
        {id: 1, message: 'Здарова'},
        {id: 2, message: 'Есть сотка в займы?'},
        {id: 3, message: 'Епта'},

    ]

    let dialogsElements = [
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>,
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>,
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>,
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
    ]

    let messagesElements = [
        <Message message={messageData[0].message}/>,
        <Message message={messageData[1].message}/>,
        <Message message={messageData[2].message}/>
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}

                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>*/}

            </div>
            <div className={classes.messages}>
                {messagesElements}
                {/*<Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>*/}

            </div>
        </div>
    )
}

export default Dialogs;
