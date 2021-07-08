import React from "react";
import { PriceTab, Title, Price, Info, Button, UL, LI } from "./stylesPricing";

const Startup = () => {
    return(
        <PriceTab>
            <Title><h1 class="title">Startup</h1></Title>
            <Price>
                <h1 class="price"><sup class="dollar">$</sup>0.<span class="cent">00</span></h1>
                    <h2 class="time">Yearly</h2>
            </Price>
            <Info><UL class="info">
                <LI class = "lists">
                <span class="bold">5</span>Users
                </LI>
                <LI class = "lists">
                 <span class="bold">1</span>Projects
                </LI>
                <LI class = "lists">
                 <span class="bold">16 GB</span>Bandwidth
                </LI>
                </UL>
                <Button class="startup" onClick="">Start Now</Button>    
            </Info>     
        </PriceTab>
    )
}
export default Startup;