import React from "react";
import { PriceTab, Title, Price, Info, Button, UL, LI } from "./stylesPricing";

const Growth = () => {
    return(
        <PriceTab>
         <Title><h1 class="title">Growth</h1></Title>
            <Price>
                <h1 class="price"><sup class="dollar">$</sup>29.<span class="cent">99</span></h1>     
            </Price>
            <Info><UL class="info">
                <LI>
                <span class="bold">25</span>Users
                </LI>
                <LI>
                 <span class="bold">50</span>Projects
                </LI>
                <LI>
                 <span class="bold">128 GB</span>Bandwidth
                </LI>
                <LI>
                 <span class="bold">24/7</span>Customer Support
                </LI>
                </UL>
                <Button class="growth" onClick="">Start Now</Button>   
        </Info>
    </PriceTab>
    )
}
export default Growth;