import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Parent from '../../Parent';
import Home from '../Home/Home';
import MobileApp from '../Home/Appi/MobileApp';
import Menu from '../Home/ExploreMenu/Menu';
import Contact from '../Contact/Contact';
import Login from '../LoginCredintial/Login';
import Singin from '../LoginCredintial/Singin';

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