import React, {useContext, useState} from 'react';


import TextField from '@mui/material/TextField';
import './Login.css';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
// import { useContext } from 'react';


const Login = () => {

const [userName, setUserName] = useState("");    
const [userpassword, setPassword] = useState("");  
const [error, setError] = useState('');  

const handleChange = (ev) =>{
    if(ev.target.value === ""){
        setError("invalid")
    }else{
        setError("")
    }

    if(ev.target.value === "userName"){
        setUserName(ev.target.value);
    }else{
        setPassword(ev.target.value);
    }
    

}


  return (
    <div className='Login'>
        <div className='LoginRow'>
            <div className='LoginCol'>
            <TextField id="outlined-basic" label="User Name" variant="outlined" onChange={handleChange} name='userName' />
            </div>
            <div className='LoginCol2'>
            <TextField id="outlined-basic" label="Password" variant="outlined" onChange={handleChange}/>
            </div>
            <div className='loginbtn'>
            <Button variant="outlined">Login</Button>
            </div>
            <div>
                <p>
                    {error}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login