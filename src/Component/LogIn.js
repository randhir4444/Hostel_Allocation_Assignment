import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import socialMediaAuth from '../sevice/auth'
import { facebookProvider,googleProvider } from '../config/authMethods';
import './Style/Login.css';
import Gender from './Gender';

function LogIn() {
    const [loggedIn, setLoggedIn] = useState(false);
    const handleOnClick=async (provider)=>{
        const res =await socialMediaAuth(provider);
        setLoggedIn(true);
        console.log(res);
    };
    return (
        <div className="main">
            {
                !loggedIn?
                <div>
                    <div className="head">
                    <h2>Hostel Allocation</h2><br/>
                    <h4>Please Sign-In:</h4>
                    </div>
                    <div className="button">
                    <Button onClick={()=>handleOnClick(facebookProvider)}  variant="outline-primary">Facebook  
                    <ion-icon name="logo-facebook"></ion-icon></Button>
                    <Button onClick={()=>handleOnClick(googleProvider)} variant="outline-primary">Google
                    <ion-icon name="logo-google"></ion-icon></Button>
                    </div>
                </div>:<Gender/>
            }
            
        </div>
    )
}

export default LogIn;
