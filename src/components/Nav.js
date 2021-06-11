import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <>
            <Navbar>
                <h1><Link id="logo" to='/'>Animeficator</Link></h1>
                <ul>
                    <li><Link to='/'>1. About Us</Link></li>
                    <li><Link to='/suggestion'>2. Our Suggestions</Link></li>
                    <li><Link to='/contact'>3. Contact Us</Link></li>
                </ul>

            </Navbar>
        </>
    );
}
const Navbar = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    a {
        color:white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    li {
    padding-left: 10rem;
    position: relative;
    color: white;
  }
    #logo {
        font-size: 1.5rem;
        font-family: 'Indie Flower', cursive;
        font-weight: lighter;
    }
`
export default Nav;