import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Dialogs from './Components/Dialogs/Dialogs'
import Profile from "./Components/Profile/Profile";


const App = () => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Dialogs/>
                   {/* <Profile/>*/}
                </div>
            </div>
    );
}

export default App;
