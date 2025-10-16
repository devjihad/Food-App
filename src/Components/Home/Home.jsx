// import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Landing from './Landing/Landing';
import Menu from './ExploreMenu/Menu';
import { useState } from 'react';
import FoodItem from './Food-item/FoodItem';
import MobileApp from './Appi/MobileApp';


const Home = () => {
        const [valu, setvalu] =useState('ALL')

    return (
        <div >
            
            <Landing/>
            <Menu valu={valu} setvalu={setvalu}/>
            <FoodItem valu={valu}/>
            <MobileApp/>
        </div>
    );
};
export default Home;