import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from './HeaderFooter/Header';
import Footer from './HeaderFooter/Footer';

export default function MainLayout(){
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
