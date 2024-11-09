import '../home-page/homePage.css'
import { assets } from '../../assets/assets'

const HomePage = () => {
    return (
        <>

            <div className='home-page'>
                <div className='container'>

                    {/* Header */}
                    <div className="home-page__header">
                        <div className="header__logo">
                            .HustCity
                        </div>
                        <div className="header__menu">
                            <ul className='inner-menu'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Our Team</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                    {/*End Header */}

                    {/* Main */}
                    <div className="home-page__main">
                        <div className="main__left">
                            <div className="left__title">
                                Discover And Manage Exclusive Condo Amenities
                            </div>

                            <div className="left__desc">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quod dolor, quidem consequuntur
                            </div>

                            <div className="left__button">
                                <a href="#" className='button button__active'>Sign In</a>
                                <a href="#" className='button button-contact'>Contact Us</a>
                            </div>
                        </div>

                        <div className="main__right">
                            <div className="right__img">
                                <img src={assets.homepage_main} alt="computer_img" />
                            </div>
                        </div>
                    </div>
                    {/* End Main */}

                    {/* Footer */}
                    <div className="home-page__tech">
                        <div className="desc">Technology used</div>
                        <div className="tech__main">
                            <div className="tech__item">
                                <div className="item__icon">
                                    <img src={assets.react} alt="react" />
                                </div>
                                <div className="item__content">React</div>
                            </div>


                            <div className="tech__item">
                                <div className="item__icon">
                                    <img src={assets.spring_boot} alt="spring" />
                                </div>
                                <div className="content">Spring Boot</div>
                            </div>
                            <div className="tech__item">
                                <div className="item__icon">
                                    <img src={assets.mysql} alt="mysql" />
                                </div>
                                <div className="content">My SQL</div>
                            </div>
                            <div className="tech__item">
                                <div className="item__icon">
                                    <img src={assets.firebase} alt="firebase" />
                                </div>
                                <div className="content">Firebase</div>
                            </div>
                            <div className="tech__item">
                                <div className="item__icon">
                                    <img src={assets.rest_api} alt="rest" />
                                </div>
                                <div className="content">Rest:API</div>
                            </div>
                            <div className="tech__item">
                                <div className="item__icon">
                                    <img src={assets.java} alt="java" />
                                </div>
                                <div className="content">Java</div>
                            </div>
                            <div className="tech__item">
                                <div className="item__icon">
                                    <img src={assets.typescript} alt="typescript" />
                                </div>
                                <div className="content">TypeScript</div>
                            </div>
                        </div>
                    </div>
                    {/* End Footer */}
                </div>
            </div>
        </>
    )
}

export default HomePage