import React from 'react';
import { RemoveButton, ProdCart, ProdSelect } from '../../Styled/cartSyled';

export const CartProduct = ({cartData})=> {   
   
  return (
    <ProdCart>
        <div style={{backgroundColor:"black"}}>
            <img style={{border:"1px solid pink", height:"145px", width:"110px"}} src={cartData.imageurl} alt={cartData.name}/>
        </div>
        <div>
            <p style={{fontSize:"15px", fontWeight:"bold", lineHeight:"30px"}}>{cartData.brand}</p>
            <p style={{fontSize:"14px", fontWeight:"bold", lineHeight:"30px"}}>{cartData.desc}</p>
        </div>
        <div>
            <p style={{fontWeight:"bold",fontSize:"20px"}}>$ {cartData.price}</p>
            <ProdSelect>
                <option value="remove">Remove</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
               
            </ProdSelect>
            <br/>
            <br/>
            
        </div>
        </ProdCart>
  )
}