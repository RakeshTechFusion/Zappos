import React, { useRef } from 'react'
import { CartSidebar, EmptyImage, EmptyCart, SidbarHeading, EmptyCartLink } from '../Styled/cartSyled'
import closeCart from '../cart/closeCart'
import { CartProduct } from '../cart/CartProduct'


export const Cart = ({ cartToggle, setCartToggle }) => {
  const $sideBarRef = useRef()
  closeCart($sideBarRef, () => setCartToggle(false))
  return (
    <CartSidebar ref={$sideBarRef} className={cartToggle ? "expand" : "shrink"}>
      <SidbarHeading>
        <h2>My Cart</h2>
        <h2 onClick={() => setCartToggle(false)} className='closeCross'>X</h2>
      </SidbarHeading>
      <hr />

      

      {/* Empty Cart Matter start*/} 
      <div style={{marginTop:"auto",position:"relative", overflowY:"scroll", paddingRight:"25px", height:"70vh"}}>
      <p style={{ color: "rgb(88,88,88)", fontSize: "14px" }}>Nothing to see here yet! Sign in to see items that you've previously placed in your Cart or check out all the awesome things you can buy on Zappos.com!</p>
        <EmptyCart>
          <EmptyCartLink to="/sign-in">Sign In</EmptyCartLink>
          <EmptyCartLink to="/">Home Page</EmptyCartLink>
          <EmptyCartLink to="/brands">Brand List</EmptyCartLink>
          <EmptyCartLink to="/contactus">Contact Us</EmptyCartLink>
        </EmptyCart>
        <EmptyImage>
          <img className='emptyCartImage' src='https://www.zappos.com/marty-assets/empty-cart.aa012412a3668eb7151b6731c716a428.svg' alt="image1"/><br />
          <button>Sign In</button>
        </EmptyImage>
        <CartProduct/>
      </div>
       {/* Empty Cart Matter end*/} 

       

    <div style={{marginLeft:"-4vh",position:"fixed", height:"100px", marginTop:"auto", backgroundColor:"rgb(245,245,245)", width:"100%", bottom:"0", display:"block", padding:"20px"}}>
    <button style={{border:"2px solid black", borderRadius:"5px" ,background:"transparent",height:"40px"}}>VIEW CART</button>
    <button>PROCEED TO CHECKOUT</button>
    </div>
    </CartSidebar>

  )
}
