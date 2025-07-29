import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';


const MainLayout = () => {
    
    return (
        <div className='font-poppins flex flex-col min-h-screen'>
            {/* Navbar */}
            <Navbar />
            {/* Main Content Area */}
            <main className='flex-grow container mx-auto p-4'>
                <Outlet />
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;
