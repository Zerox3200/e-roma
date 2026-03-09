import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/Hero/Hero'
import AboutSection from '../components/AboutSection/AboutSection '
import LatestListings from '../components/LatestListings/LatestListings'

export default function Home() {
    return <>
        <Navbar />
        <Hero />
        <AboutSection />
        <LatestListings />
    </>
}
