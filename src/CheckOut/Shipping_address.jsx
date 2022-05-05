import React, { useState } from 'react'
import styles from './sop_address.module.css'
import './checkoutExtra.css'
import { v4 as uuidv4 } from 'uuid';
const Shipping_address = () => {
  
    const [address,setAddress] = useState({
        // country : "",
        // fullname : "",
        // address_line1 : "",
        // address_line2 : "",
        //   city :      "",
        //   state : "",
        //   zip  : "",
        //   phoneNo : "",
        
    })
  const [records,setRecords] = useState([])

    const handleInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        
        setAddress({...address, [name] : value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(address);
        const newRecord = {...address, id : uuidv4()}
        console.log("before",records);
        setRecords([...records, newRecord])
        console.log( "after",records);
        localStorage.setItem("shippingAddress" , JSON.stringify(records));
        setAddress({country : "", fullname : "", address_line1 : "", address_line2 : "", city : "", state : "", zip : "", phoneNo : "",})
    }
    console.log(styles);
  
    return (
    <div className={styles.mainCont}> 
        <h2>1. Shipping Address</h2>
        <div className='address_cont'>
            <h2>New Shipping Address</h2>
            <hr/>
            <form className='address_form' >
                <div>
                    <label>Country</label>
                    <select name='country' className={styles.inputFied}  id='country' value={address.country} onChange={handleInput} required>
                        <option value="United states">United States</option>
                        <option value="Palau">Palau</option>
                        <option value="Virgin Islands,U.S.">Virgin Islands,U.S.</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Northern Mariana Islands">  Northern Mariana Islands</option>
                    </select>
                </div>
                
            <div >
                <label>Full Name</label>
                <input id='fullname' className={styles.inputFied} name='fullname' value={address.fullname} onChange={handleInput} placeholder='First and last name' required />
            </div>
               
            <div>
                <label >Address Line 1</label>
                <input id='address_line1' className={styles.inputFied} name='address_line1' value={address.address_line1} onChange={handleInput} placeholder='Street address, company name, c/o' required />
            </div>
                
            <div>
                <label>Address Line 2</label>
                <input id='address_line2' className={styles.inputFied} name='address_line2' value={address.address_line2} onChange={handleInput} placeholder='Apartment,suite,unit,building,floor,etc' />
            </div>
                
                <div style={{display : "flex"}} >
                    <div>
                        <label style={{display : "block"}} >City</label>
                        <input id='city' name='city' className={styles.smallInput} value={address.city} onChange={handleInput} placeholder='eg. Las Vegas' required/>
                    </div>
                    
                <div>
                    <label style={{display : "block"}} >State</label>
                    <input id='state' name='state' className={styles.smallInput} value={address.state} onChange={handleInput} placeholder='eg. Nevada' required/>
                </div>
                    
                <div>
                    <label style={{display : "block"}} >Zip</label>
                    <input id='zip' name='zip' className={styles.smallInput} value={address.zip} onChange={handleInput} type="number" placeholder='eg. 89101' required/>
                </div>
                    

                </div>
                <div>
                    <label>Phone Number</label>
                    <input id='phoneNo' className={styles.inputFied} name='phoneNo' value={address.phoneNo} onChange={handleInput} type="number" placeholder="Including area code" required/>
                </div>
                
                <div>
                    <input id='checkbox'className={styles.checkbox} type="checkbox" required/>
                </div>
                
            <div>
                <input type="submit" className="saveAddressBtn"   onClick={handleSubmit} value="SHIP TO THIS ADDRESS"/>
            </div>
                
            </form>
            

        </div>
        
    </div>
  )
}

export { Shipping_address }