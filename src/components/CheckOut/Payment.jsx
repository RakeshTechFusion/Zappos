import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import styles from './sop_address.module.css'
import './checkoutExtra.css'
let cardData = [{cardNo : "123456789",cvv : "123"}]
export const Payment = () => {

    const [cardDetails, setCardDetails] = useState({
        cardHolderName : "",
        cardNo : "",
        month : "",
        year : "",
    
    })

    const handlePayment = (e)=>{
        const name = e.target.value;
        const value = e.target.value;

        setCardDetails({...cardDetails, id : uuidv4()})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();

    }

  return (
    <div className={styles.mainCont}>
        <div><h2>2.Payment</h2></div>
        <form>
            <div>
                <input id='cardHolderName'className={styles.inputFied} name='cardHolderName' value={Payment.cardHolderName}
                onChange={handlePayment} placeholder='Name on Card' required /> 
            </div>

            <div>
                <input id='cardNo' className={styles.inputFied} name='cardNo' value={Payment.cardNo}
                onChange={handlePayment} placeholder='Card Number' required /> 
            </div>

            <div style={{display : "flex", gap : "20px"}}>
                <input id='month' type="month" className={styles.smallInput} name='month' value={Payment.month}
                onChange={handlePayment} placeholder='' required /> 

                <input id='cvv' type="cvv" className={styles.smallInput} name='cvv' value={Payment.year}
                onChange={handlePayment} placeholder=' CVV' required /> 
            </div>

            <button type='submit' className="saveAddressBtn" onClick={handleSubmit}>ADD THIS PAYMENT METHOD</button>

        </form>
       

    </div>
  )
}
