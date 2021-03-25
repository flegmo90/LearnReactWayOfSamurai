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

    let dialogs = [
        {id: 1, name: 'Дима'},
        {id: 2, name: 'Саша'},
        {id: 3, name: 'Света'},
        {id: 4, name: 'Ира'},
        {id: 5, name: 'Костя'}
    ]

    let messages = [
        {id: 1, message: 'Здарова'},
        {id: 2, message: 'Есть сотка в займы?'},
        {id: 3, message: 'Епта'},

    ]

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = messages.map(messages => <Message message={messages.message}/>)

    /*    let dialogsElements = [
            <DialogItem name={dialogs[0].name} id={dialogs[0].id}/>,
            <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>,
            <DialogItem name={dialogs[2].name} id={dialogs[2].id}/>,
            <DialogItem name={dialogs[3].name} id={dialogs[3].id}/>,
            <DialogItem name={dialogs[4].name} id={dialogs[4].id}/>
        ]*/

    /*    let messagesElements = [
            <Message message={messages[0].message}/>,
            <Message message={messages[1].message}/>,
            <Message message={messages[2].message}/>
        ]*/

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}

                {/*<DialogItem name={dialogs[0].name} id={dialogs[0].id}/>
                <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>
                <DialogItem name={dialogs[2].name} id={dialogs[2].id}/>
                <DialogItem name={dialogs[3].name} id={dialogs[3].id}/>
                <DialogItem name={dialogs[4].name} id={dialogs[4].id}/>*/}

            </div>
            <div className={classes.messages}>
                {messagesElements}
                {/*<Message message={messages[0].message}/>
                <Message message={messages[1].message}/>
                <Message message={messages[2].message}/>*/}

            </div>
        </div>
    )
}

export default Dialogs;
