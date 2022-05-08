import React, { useState } from 'react'
import Register from './Register';
  
const CreateAcc = () => {
 
    const [reg,setReg] = useState(true)
   
    const handleClick = ()=>{
        
        setReg(!reg)
    }

  return (
     
  
      <>
       
    {reg ? (

        <div style={{
            width:"70%",
            margin:"8%",
            border:"1px solid black",
            padding:"1%",
            background:"transparent"
        }}>  
        <form>
        
        <div style={{
            display:"flex",
            justifyContent:"space-around"
        }}>
            <h2>Sign-In</h2>
            <h2>X</h2>
        </div>

       <hr></hr>
            <div className='sign-in-in'>
            <div className='sign-btn'>
            <button  className='btn btn-dark btn-lg btn-block'>SIGN IN WITH ZAPOOS</button>
            
            <button  className='btn btn-dark btn-lg btn-block'>SIGN IN WITH AMAZON</button>
            
            <button  className='btn btn-dark btn-lg btn-block'>SIGN IN WITH GOOGLE</button>
           
            <hr></hr>
            
            <p style={{ textAlign:"center"}}>or</p>
           
            <button onClick={handleClick}  type="submit" className='btn btn-dark btn-lg btn-block'>Create your Zappos account</button>

            <p style={{ margin:"3% 10%"}}>By signing in, you agree to zappos Terms and Conditions and Privacy Policy.</p>
            </div>
            
            <div>

                <h5>
                By logging in with Amazon, you may be eligible for additional Prime benefits like FREE Upgraded Shipping. Then, join Zappos VIP for additional Prime-linked VIP perks: 
                </h5>

                <ul>
                   <li>If you are an Amazon Prime Member, sign in with Amazon to qualify for free upgraded shipping!</li>
                   <li>Get FREE Expedited Shipping</li>
                   <li>Earn 2 Points for Every $1 Spent</li>
                   <li>Receive Bonus Points on Select Brands</li>
                   <li>Redeem Points for VIP Codes</li>
                </ul>
            </div>
            </div>
            
           
          </form>
          </div>
 ):(
<Register/>

)}  
       
        </> 
 
  )
}

export default CreateAcc