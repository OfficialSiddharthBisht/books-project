import React from 'react';
import {Navigate, useLocation, useRoutes} from 'react-router-dom';
import AuthLayout from '../Layout/AuthLayout';
import MainLayout from '../Layout/MainLayout';
import _404 from '../Pages/NotFound/_404';
import _500 from '../Pages/NotFound/_500';

// Pages import for routing
import Home from '../Pages/Home';
import Signup from '../Pages/Auth/Signup';
import Login from '../Pages/Auth/Login';

export default function Router(){
    return useRoutes([
        {
            path: "",
            element: <MainLayout />,
            children :[
                {
                    path: "",
                    element: <Home />
                },
            ],
        },
        {
            path: "",
            element: <AuthLayout />,
            children : [
                {
                    path :"signup",
                    element : <Signup />,
                },
                {
                    path: "login",
                    element: <Login />
                }
            ]
        },
        {path:"404", element: <_404 />},
        {path:"500", element: <_500 />},
        {path: "*", element: <Navigate to ="/404" replace />},
    ]);
}