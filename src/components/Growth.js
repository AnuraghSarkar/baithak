import React from "react";
import { PriceTab, Title,Price, Info } from "../styles";

const Growth = () => {
    return(
        <PriceTab>
         <Title><h1 class="title">Growth</h1></Title>
            <Price>
                <h1 class="price"><sup class="dollar">$</sup>29.<span class="cent">99</span></h1>     
            </Price>
            <Info><ul class="info">
                <li>
                <span class="bold">25</span>Users
                </li>
                <li>
                 <span class="bold">50</span>Projects
                </li>
                <li>
                 <span class="bold">128 GB</span>Bandwidth
                </li>
                <li>
                 <span class="bold">24/7</span>Customer Support
                </li>
                </ul>
                <button class="growth" onClick="">Start Now</button>   
        </Info>
    </PriceTab>
    )
}
export default Growth;