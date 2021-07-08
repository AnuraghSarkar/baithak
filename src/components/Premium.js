import React from "react";
import {
  PriceTabPremium,
  Recommended,
  TitlePremium,
  Price,
  InfoPremium,
  Button,
  UL,
  LI,
} from "./stylesPricing";

const Premium = () => {
  return (
    <PriceTabPremium>
      <Recommended>
        <h2 class="recommend">Recommended</h2>
      </Recommended>
      <TitlePremium>
        <h1 class="premiumtitle">Premium</h1>
      </TitlePremium>
      <Price>
        <h1 class="price-premium">
          <sup class="dollar">$</sup>49.<span class="cent">99</span>
        </h1>
        <h2 class="time">Yearly</h2>
      </Price>
      <InfoPremium>
        <UL class="info-premium">
          <LI>
            <span class="bold">50</span>Users
          </LI>
          <LI>
            <span class="bold">75</span>Projects
          </LI>
          <LI>
            <span class="bold">256 GB</span>Bandwidth
          </LI>
          <LI>
            <span class="bold">1</span> Free Domain
          </LI>
          <LI>
            <span class="bold">24/7</span>Customer Support
          </LI>
        </UL>
        <Button class="premium" onClick="">
          Buy Now
        </Button>
      </InfoPremium>
    </PriceTabPremium>
  );
};
export default Premium;
