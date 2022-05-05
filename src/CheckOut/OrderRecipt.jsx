import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react'
import styles from './OrderRecipt.module.css'
import './checkoutExtra.css'
export const OrderRecipt = () => {
    const handlePromo = (e)=>{
        let totalPrice = 100;
        let promocode = document.getElementById('promoCode').value;
        if(promocode==="zappos10"){
            totalPrice -= totalPrice*(0.1);
            console.log(totalPrice);
        }
        else{
            console.log("Invalid Promo Code !")
        }
    }

  return (
   <>
        
        <div className='promobox'>
            <p>Order Summary ( 4 items)</p>  
            <div className={styles.miniCont}>
                <h3>Subtotal:</h3>
                <h3>${}</h3>
            </div>

            <div className={styles.miniCont}>
                <p>Shipping:</p>
                <p>Free</p>
            </div>
            <div className={styles.miniCont}>
                <p>Total before tax:</p>
                <p>${}</p>
            </div>

            <div className={styles.miniCont}>
                <p>Total before tax:</p>
                <p>${}</p>
            </div>
            <div className={styles.miniCont}>
                <p>Estimated tax to be collected:</p>
                <p>${}</p>
            </div>
            <hr />
            <div className={styles.miniCont}>
                <h2>Total before tax:</h2>
                <h2>${}</h2>
            </div>
        </div>
        <div className='promobox'>
            <h2>Apply Gift Card or Promo Code</h2>
            <div className={styles.promoCodeDiv}>
                <input id='promoCode' type="text" style={{height : "30px",width:"70%", fontSize:"larger"}} placeholder='Enter Code' />
                <button className='applyBtn' onClick={handlePromo} >APPLY</button>
            </div>
          
        

            <div>
                <button className='placeOrderBtn'> PLACE YOUR ORDER </button>
            </div>
        </div>
   </>
  )
}
