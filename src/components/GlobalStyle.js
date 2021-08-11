import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }
    html {
        @media (max-width:1700px){
            font-size: 75%;
        }
    }

    
    body{
        background: #1b1b1b;
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
    }
    button{
        font-weight: bold;
        font-size: 1.1.rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        font-family: 'Inter', sans-serif;
        &:hover{
            background-color: #23d997;
            color: white;
        }
    }
        h2{
            font-weight: lighter;
            font-size: 4rem;
        }
        h3{
            color: white;
        }
        h4{
            font-weight: bold;
            font-size: 2rem;
        
        }
        a{
            font-size: 1.1rem;
        }
        span{
            font-weight: bold;
            color:#23d997;
        }
        p{
            padding: 3rem 0rem;
            color: #ccc;
            font-size: 1.4rem;
            line-height: 150%;
        }

.recommend{
    /* position: absolute; */
    width: 72px;
    height: 12px;
    font-size: 0.625rem; 
    transform: rotate(-45.56deg);
    font-style: italic;
    font-weight: bold;
    line-height: 0.75rem; 
    margin-top: -3rem;
    margin-left: -3rem;
    padding: 0.1rem ;
    background-color: #44C97F;
}
.title{
    font-size: 2rem;
}
.hero-background{
    background: url('images/bg.jpg') center center/cover
    no-repeat;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.2);
    object-fit:contain;
}
.header-elements{
    font-weight: bold;
    list-style: none;
    display: flex;
    justify-content:space-around;
    flex: 1;
}
.header-text{
    margin-left: 20rem;
}
.learn-more{
    font-size: 1rem;
    font-weight: bold;
    margin-right: 20rem;
    background: transparent;
    border: 0.1rem solid #fff;
    border-radius: 10rem;
    color: #fff;
    line-height: 2rem;
    width: 9rem;
    margin-top: 0.01rem;
}
.nav{
    list-style: none;
    display: flex;
    justify-content:space-around;
    flex: 1;
    color: #fff;
}
.logo{
    margin-top:2rem;
    margin-left: 10rem;
    font-size: 2rem;
    color: #000;
    background:white;
}
.login{
    margin-top:2rem;
    margin-left: 50rem;
}


`;

export default GlobalStyle;
