import React from 'react'
import styled from 'styled-components'

const Nav = () => {
    return (
        <>
            <Navbar>
                <h1><a href="#" id="logo">Animeficator</a></h1>
                <ul>
                    <li><a href="#"></a>1. About Us</li>
                    <li><a href="#"></a>2. Our Suggestions</li>
                    <li><a href="#"></a>3. Contact Us</li>
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
  }
    #logo {
        font-size: 1.5rem;
        font-family: 'Indie Flower', cursive;
        font-weight: lighter;
    }
`
export default Nav;