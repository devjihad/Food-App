import React from 'react';
import Navbar from './Components/Home/Navbar/Navbar';
import Footer from './Components/Home/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Parent = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Parent;