import { hover } from '@testing-library/user-event/dist/hover';
import React, { useState } from 'react'
import styles from './OrderRecipt.module.css'
import './checkoutExtra.css'
export const OrderRecipt = (props) => {
  
    const [applyPromo, setApplyPromo] = useState(false);
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
   
    let cartArr2 = JSON.parse(localStorage.getItem("Cart")) ;
    let TotalPrice = cartArr2.reduce((acc, elem) => {
    return acc + Number(elem.price);
  }, 0)
   
    console.log(props);

  
    return (
        <>
            
            <div className='promobox'>
                        
                    return (
                        <>
                                <p>Order Summary ( {cartArr2.length} {cartArr2.length === 1 ? "item" : "items"})</p>  
                            <div className={styles.miniCont}>
                                <h3>Subtotal:</h3>
                                <h3>$ {TotalPrice.toFixed(2)}</h3>
                            </div>

                            <div className={styles.miniCont}>
                                <p>Shipping:</p>
                                <p>Free</p>
                            </div>
                            <div className={styles.miniCont}>
                                <p>Total before tax:</p>
                                <p>$ {TotalPrice.toFixed(2)}</p>
                            </div>

                            <div className={styles.miniCont}>
                                <p>Total after tax:</p>
                                <p>$ {(TotalPrice*1.1).toFixed(2)}</p>
                            </div>
                            <div className={styles.miniCont}>
                                <p>Estimated tax to be collected:</p>
                                <p>$ {(TotalPrice*(10/100)).toFixed(2)}</p>
                            </div>
                            <hr />
                            <div className={styles.miniCont}>
                                <h2>Order Total :</h2>
                                <h2>$ {TotalPrice.toFixed(2)}</h2>
                            </div>
                        
                        
                        </>
                        
                    )
                
            </div>
            

            <div className='promobox'>
               <h2>Apply Gift Card or Promo Code</h2>
                 <div className={styles.promoCodeDiv}>
                     <input id='promoCode' type="text" style={{height : "30px",width:"70%", fontSize:"larger"}} placeholder='Enter Code' />
                     <button className='applyBtn' onClick={handlePromo} >APPLY</button>
                 </div>
            
            

                 <div>
                     <button className='placeOrderBtn' > PLACE YOUR ORDER </button>
                 </div>
    
             </div> 
        
        </>
    )
 }
