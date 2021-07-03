import React from "react";
import { PriceTab, Title,Price, Info } from "../styles";

const Enterprise = () => {
    return(
        <PriceTab>
        <Title><h1 class="title">Enteprise</h1></Title>
        <Price>
            <h1 class="price"><sup class="dollar">$</sup>99.<span class="cent">99</span></h1>
                    <h2 class="time">Yearly</h2>
        </Price>
        <Info>  <ul class="info">
            <li>
             <span class="bold">125</span> Users
            </li>
            <li>
            <span class="bold">Unlimited</span> Projects
            </li>
            <li>
             <span class="bold">528 GB</span> Bandwidth
            </li>
            <li>
            <span class="bold">2</span>Free Domain
            </li>
            <li>
             <span class="bold">24/7</span> Customer Support
            </li>
            </ul>
            <button class="enterprise" onClick="">Buy Now</button>   
        </Info>
    </PriceTab>
    )
}
export default Enterprise;