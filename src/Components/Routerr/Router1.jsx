import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Parent from '../../Parent';
import Home from '../Home/Home';
import MobileApp from '../Home/Appi/MobileApp';
import Menu from '../Home/ExploreMenu/Menu';
import Contact from '../Contact/Contact';
import Login from '../LoginCredintial/Login';
import Singin from '../LoginCredintial/Singin';
import Cart from '../Cart/Cart';
import Order from '../Order/Order';

const Router1 = () => {
    const router =createBrowserRouter([
        {
            path: '/',
            element:<Parent/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/mobile-app',
                    element:<MobileApp/>
                },
                {
                    path:'/menu',
                    element:<Menu/>
                },
                {
                    path:'contact',
                    element:<Contact/>
                },
                {
                    path:'login',
                    element:<Login/>
                },
                {
                    path:"signup",
                    element:<Singin/>
                },
                {
                    path:'/cart',
                    element:<Cart/>
                },
                {
                    path: '/order',
                    element:<Order/>
                }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Router1;