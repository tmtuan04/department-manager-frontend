import '../home-page/homePage.css'
import Header from './partials/Header'
import Home from './Home'
import AboutUs from './AboutUs'

const HomePage = () => {
    return (
        <>
            <div className="home-page">
                <Header />
                <Home/>
                <AboutUs/>
            </div>
        </>
    )
}

export default HomePage