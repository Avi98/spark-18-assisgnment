import * as React from 'react';
import styled from "styled-components/macro"


const NavBar = styled.div`
    display:flex;
    justify-content:space-between;
    padding: 10px 10%;
    background-color: #FFFF;
    max-height: 50px;
    align-items:center;
    >h1{
        letter-spacing: 2.5px;
        font-size: 15px;
        font-weight: 600;
        color: #7e24ca;
    }
    .bar{
        display:flex;
        font-size: 12px;
        justify-content:space-between;
        width: 30%;
        >button{
            background: #ffff;
            border: 1px solid #e6dddd;
            border-radius: 5px;
        }
    }
`
export default () => {
    return (
        <NavBar>
            <h1>LOGO</h1>
            <div className='bar'>
                <p>Home</p>
                <p>My Portfolio</p>
                <p>Clients</p>
                <button type='button' >Get in Touch</button>
            </div>
        </NavBar>
    )
}