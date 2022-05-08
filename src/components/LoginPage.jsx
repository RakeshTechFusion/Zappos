import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Home from './Home';

const LoginPage = () => {

    const [emaillog,setEmaillog] = useState("");
    const [passwordlog,setPasswordlog] = useState("");
    const [flag,setFlag] = useState(false);
    const [home,setHome] = useState(true);

    const handleLogin = (e) =>{

        e.preventDefault();

        let email = localStorage.getItem("Email").replace(/"/g,"")
        let pass = localStorage.getItem("Password").replace(/"/g,"")

        if(!emaillog || !passwordlog){
            setFlag(true);
            console.log("empty")
        }else if(!passwordlog !== pass || !emaillog !== email){
            setFlag(true)
        }else{
            setHome(!home);
            setFlag(false)
        }

    }

    const handleClick = ()=>{
    
        setHome(!home)
    }
    

  return (
   <>
   
   <div> 
 
    {home ?(
    
      <form onSubmit={handleLogin}>
        
          
          
            <h2>Sign-In</h2>
            <br></br>
            <div>
                <lable><h6>Email</h6></lable>
                <input 
                type="text"
                className="form-control"
                placeholder=''
                onChange={(event)=> setEmaillog(event.target.value)}

                />
            </div>

            <br></br>
              <div>  
                  <div style={{display:"flex",justifyContent:"space-between"}}>
                 
                  <lable><h6>Password</h6></lable>
                  <p style={{color:"teal"}}> Forgot your password?</p>
                  </div>
               
                <input 
                type="password"
                className="form-control"
                placeholder=''
                onChange={(event)=> setPasswordlog(event.target.value)}

                />
                 </div>

                 <br></br>
                 <div className='sign-btn'>
                <button onClick={handleClick} type="submit" className='btn btn-dark btn-lg btn-block'>Sign-In</button>
                </div>

                <br></br>
                <div style={{display:"flex"}}>
                 <input type="checkbox" />
                <p> Keep me signed in Details</p>
                </div>
               
               
                {flag && (
          <Alert color='primary' varient="danger">
              <h2>Please fill correct Info....</h2>
          </Alert>
      )}

    
    </form>
 
):(
    <Home/>
)}
      </div> 
   
    </>
  )
}

export default LoginPage