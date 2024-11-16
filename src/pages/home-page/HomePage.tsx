import '../home-page/homePage.css'
import Header from './partials/Header'
import Home from './Home'
import AboutUs from './AboutUs'
import OurTeam from './OurTeam'
import ContactUs from './ContactUs'

import { useEffect } from 'react'
import { highlightMenuOnScroll } from './ScrollPage'

const HomePage = () => {

    useEffect(() => {
        highlightMenuOnScroll()
    }, [])

    return (
        <>
            <div className="home-page">
                <Header />
                <Home/>
                <AboutUs/>
                <OurTeam/>
                <ContactUs/>
            </div>
        </>
    )
}

export default HomePage