import React from "react";
import { PriceTab, Title,Price, Info } from "../styles";

const Startup = () => {
    return(
        <PriceTab>
            <Title><h1 class="title">Startup</h1></Title>
            <Price>
                <h1 class="price"><sup class="dollar">$</sup>0.<span class="cent">00</span></h1>
                    <h2 class="time">Yearly</h2>
            </Price>
            <Info><ul class="info">
                <li class = "lists">
                <span class="bold">5</span>Users
                </li>
                <li class = "lists">
                 <span class="bold">1</span>Projects
                </li>
                <li class = "lists">
                 <span class="bold">16 GB</span>Bandwidth
                </li>
                </ul>
                <button class="startup" onClick="">Start Now</button>    
            </Info>     
        </PriceTab>
    )
}
export default Startup;