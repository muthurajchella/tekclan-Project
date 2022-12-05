import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import User from "../LoginJson/input.json";


import TextField from '@mui/material/TextField';
import './Login.css';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
// import { useContext } from 'react';


const Login = () => {

const [userName, setUserName] = useState("");    
const [userPassword, setUserPassword] = useState("");  
const [error, setError] = useState('');  
const NavigateHome = useNavigate();

const handleChange = (ev) =>{
    if(ev.target.value === ""){
        setError(
            <Alert severity="warning">This is a warning alert — check UserName or Password!</Alert>
        )
    }else{
        setError("");
    }

    if(ev.target.name === "userId"){
        setUserName(ev.target.value);
    }else{
        setUserPassword(ev.target.value);
    }
}

let formSubmite = (ev) =>{
    ev.preventDefault();

    if(userName === '' || userPassword === ''){
        setError(
            <Alert severity="warning">This is a warning alert — check UserName or Password!</Alert>
        );
    }
    setError("");


    User.find((item) => {
        if(item.id === userName && item.password === userPassword){
            NavigateHome("/Home");
        }

        setError(
            <Alert severity="warning">This is a warning alert — check UserName or Password!</Alert>
        );
    })


}

  return (
    <div className='Login'>
        <div className='LoginRow'>
            <div className='LoginCol'>
            <TextField id="outlined-basic" label="User Name" variant="outlined" onChange={handleChange} name='userId' type={"text"} />
            </div>
            <div className='LoginCol2'>
            <TextField id="outlined-basic" label="Password" variant="outlined" onChange={handleChange} name='password' type={"password"} />
            </div>
            <div className='loginbtn'>
            <Button variant="outlined" type={'submit'} onClick={(ev) => formSubmite(ev)} >Login</Button>
            </div>
            <div>
            <h1>
                    {error}
            </h1>
            </div>
        </div>
    </div>
  )
}

export default Login