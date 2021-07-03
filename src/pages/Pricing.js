import React from 'react';

import Startup from '../components/Startup'
import Growth from '../components/Growth'
import Premium from '../components/Premium'
import Enterprise from '../components/Enterprise'

import {motion} from 'framer-motion';
import { PageAnimation } from '../animation';
import styled from 'styled-components';


const Pricing = () =>{
    return(
        <Exit exit="exit" variants={PageAnimation} initial='hidden' animate='show'>

            <Startup/>
            <Growth/>
            <Premium/>
            <Enterprise/>

        </Exit>
    );
    
    
}
const Exit = styled(motion.div)`
    display: flex;
    justify-content:space-around;
    flex: 1;
`

export default Pricing;
