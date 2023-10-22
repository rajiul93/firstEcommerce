import React from 'react'
import AgniBlockHeading from '../AgniBlockHeading/AgniBlockHeading'
import BestPrice from '../Best_price/BestPrice'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import HeroSection from '../HeroSection/HeroSection'
import ProductSection1 from '../Product-section-1/Product_Section_1'
import Service from '../Services/Services'
import NavShare from '../Share/NavShare/NavShare'
// import SecondNav from '../Share/SecondNav/SecondNav'
import SliderSection from '../SliderSection/SliderSection'
import WeekOffer from '../WeekOffer/WeekOffer'

function Home() {
    return (
        <>
            <Header />
            {/* <SecondNav /> */}
            <HeroSection />
            <SliderSection />
            <ProductSection1 />
            <BestPrice />
            <AgniBlockHeading />
            <WeekOffer />
            <Service />
            <Footer />
            <NavShare />
        </>
    )
}

export default Home
