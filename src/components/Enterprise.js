import React from "react";
import { PriceTab, Title, Price, Info,Button, UL, LI } from "./stylesPricing";


const Enterprise = () => {
    return(
        <PriceTab>
        <Title><h1 class="title">Enteprise</h1></Title>
        <Price>
            <h1 class="price"><sup class="dollar">$</sup>99.<span class="cent">99</span></h1>
                    <h2 class="time">Yearly</h2>
        </Price>
        <Info>  <UL class="info">
            <LI>
             <span class="bold">125</span> Users
            </LI>
            <LI>
            <span class="bold">UnLImited</span> Projects
            </LI>
            <LI>
             <span class="bold">528 GB</span> Bandwidth
            </LI>
            <LI>
            <span class="bold">2</span>Free Domain
            </LI>
            <LI>
             <span class="bold">24/7</span> Customer Support
            </LI>
            </UL>
            <Button class="enterprise" onClick="">Buy Now</Button>   
        </Info>
    </PriceTab>
    )
}
export default Enterprise;