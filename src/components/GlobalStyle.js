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
.premiumtitle{
    margin-top: -3.9rem;
    font-size: 2rem;

}

.price{
    font-size:1.9rem;
}
.price-premium{
    font-size:1.9rem;
    margin-top:-0.6rem;
}

.cent{
    padding: 0.1rem;
    font-size: 1.2rem;
}
.time{
    margin-top: -1rem;
    font-size: 1.4rem ;
}
.info-premium{
    margin-top:0rem;
}
.lists{
    font-size: 1rem ;
}

.bold{
    font-weight: bold;
}
.startup{
    margin-top: 10rem;
}
.growth{
    margin-top: 8.6rem;
}
.premium{
    margin-top: 4.4rem;
    background-color: #FFFFFF;
}
.enterprise{
    margin-top: 4.5rem;
}
`;

export default GlobalStyle;
