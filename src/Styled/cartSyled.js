import styled from "styled-components";
import { Link } from 'react-router-dom'

export const CartSidebar=styled.div`
    z-index:1000;
    width:540px;
    background:#ffffff;
    top:0;
    right:0;
    padding: 25px;
    position:fixed;
    min-height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    transition: all ease-in-out 0.3s;

    &.expand{
        transition: all ease-in-out 0.3s;
        right:0;
    }

    &.shrink{
        transition: all ease-in-out 0.3s;
        right:-550px;
    }
`

export const SidbarHeading=styled.div`
    display:flex;
    justify-content:space-between;
    margin:auto;
    position:sticky;
    .closeCross{
        cursor:pointer;
    }
    background-color:white;

`;

export const EmptyCart=styled.div`
        display:flex;
        justify-content:space-between;
        margin:auto;
`

export const EmptyCartLink=styled(Link)`

    font-weight:bold;
    color:rgb(88,88,88);
    text-decoration:none;
    font-size:14px;
    &:hover{
        color:black;
    }

`;
export const EmptyImage=styled.div`
            margin-top:30px;
            display:block;
            text-align:center;
            align-item:center;

            button{
                margin-top:20px;
                background-color:#003953;
                height:45px;
                width:170px;
                color:white;
                font-weight:bold;
                border:none;
                border-radius:5px;
                transition: all ease-in-out 0.3s;
            }
            button:hover{
                background-color:#3366cc;
                transition: all ease-in-out 0.3s;
            }


`;

export const ProdCart=styled.div`
        display:flex;
        flex-direction:row;
        gap:20px;
        margin-top:10px;
        justify-content:space-around;

`
export const ProdSelect=styled.select`
        width:70px;
        height:40px;
        padding:0;
        border:1px solid purple;
        border-radius:5px;
        text-align:center;
        font-size:14px;
        &:focus{
            border:2px dashed purple;
           
        }

`

export const CheckoutButtonDiv=styled.div`
margin-left:-4vh;
position:fixed;
height:100px; 
margin-top:auto;
background-color:rgb(245,245,245);
width:100%;
bottom:0;
display:block; 
padding:20px;
`;
export const CheckoutButton1=styled.button`
border:2px solid black;
border-radius:5px;
background:transparent;
height:40px;
font-weight:bold;
color:#2F4F4F;
width:120px;
font-size:15px;
transition: all ease-in-out 0.3s;
&:hover{
    background-color:#3366cc;
    border:2px solid #3366cc;
    color:white;
    transition: all ease-in-out 0.3s;
}
`

export const CheckoutButton2=styled.button`
border:none;
border-radius:5px;
background:transparent;
background-color:#00FA9A;
margin-left:12%;

color:#2F4F4F;
width:200px;
// font-size:15px;
height:40px;
transition: all ease-in-out 0.3s;
&:hover{
    background-color:#98FB98;
    transition: all ease-in-out 0.3s;
}
`;

export const RemoveButton=styled.button`

    font-weight:bold;
    color:rgb(88,88,88);
    text-decoration:none;
    font-size:14px;
    background:transparent;
    text-decoration:underline;
    border:none;
    margin-top:-50px;
    &:hover{
        color:black;
    }

`;