import React from 'react'
import { Announcement } from '../components/Announcement';
import Navbar from '../components/Navbar';
import { Slider } from '../components/Slider';
import { Categories } from '../components/Categories';
import { AllProduct } from '../components/AllProduct'
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';

export const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <AllProduct/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}
export default Home;