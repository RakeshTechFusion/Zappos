import React from 'react'
import { ProdCart, ProdSelect } from '../Styled/cartSyled'

export const CartProduct = () => {
  return (
    <ProdCart>
        <div style={{backgroundColor:"black"}}>
            <img style={{height:"147px", width:"110px"}} src='https://m.media-amazon.com/images/I/51qNWpZCFHL._AC_SR736,920_.jpg' alt="p1"/>
        </div>
        <div>
            <p style={{fontSize:"15px", fontWeight:"bold", lineHeight:"8px"}}>LAUREN Ralph Lauren</p>
            <p style={{fontSize:"14px", fontWeight:"bold", lineHeight:"8px"}}>Foiled Jersey Cocktail Dress</p>
            <p style={{lineHeight:"8px"}}>Color: Desert Rose | Size: 4</p>
        </div>
        <div>
            <p style={{fontWeight:"bold"}}>$175.00</p>
            <ProdSelect>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="remove">Remove</option>
            </ProdSelect>
            <br/>
            <br/>
            <button>Remove</button>
        </div>
        </ProdCart>
  )
}
