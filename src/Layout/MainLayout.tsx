import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from './HeaderFooter/Header';
import Footer from './HeaderFooter/Footer';

const MainLayout:React.FC =() =>{
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default MainLayout;