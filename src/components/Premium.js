import React from "react";
import { PriceTabPremium, Recommended, TitlePremium, Price, InfoPremium,  } from "../styles";

const Premium = () => {
    return(
        <PriceTabPremium>
            <Recommended><h2 class="recommend">Recommended</h2></Recommended>
             <TitlePremium><h1 class="premiumtitle">Premium</h1></TitlePremium>
            <Price><h1 class="price-premium"><sup class="dollar">$</sup>49.<span class="cent">99</span></h1>
            <h2 class="time">Yearly</h2></Price>
            <InfoPremium>
            <ul class="info-premium">
            <li>
            <span class="bold">50</span>Users
            </li>
            <li>
             <span class="bold">75</span>Projects
            </li>
            <li>
            <span class="bold">256 GB</span>Bandwidth
            </li>
            <li>
             <span class="bold">1</span> Free Domain
            </li>
            <li>
             <span class="bold">24/7</span>Customer Support
            </li>
            </ul>
            <button class="premium" onClick="">Buy Now</button> 
            </InfoPremium>
        </PriceTabPremium>
    )
}
export default Premium;