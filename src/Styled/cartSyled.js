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
    transition: all ease-in-out 0.1s;

    &.expand{
        transition: all ease-in-out 0.1s;
        right:0;
    }

    &.shrink{
        transition: all ease-in-out 0.1s;
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
        margin-top:20px;


`
export const ProdSelect=styled.select`
        width:70px;
        height:40px;
        padding:10px;
        border:1px solid purple;
        border-radius:5px;
        text-align:center;
        font-size:14px;
        &:focus{
            border:2px dashed purple;
           
        }

`