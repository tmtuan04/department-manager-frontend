import './AboutUs.css'
import { assets } from '../../../assets/assets'

const AboutUs = () => {
    return (
        <>
            <section className="about-us" id='about-us'>
                <div className="container">
                    <div className="inner-about-us">
                        <div className="about-us__left">
                            <div className="left__image">
                                <img src={assets.about_us} alt="" />
                            </div>
                        </div>

                        <div className="about-us__right">
                            <div className="right__title">
                                About Us
                            </div>

                            <div className="right__desc">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus molestiae repellat debitis facilis voluptates fugiat nemo, velit, maiores commodi officiis quis nisi quo? Deleniti rem eos cum beatae nobis atque
                                . Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deserunt saepe fugiat? Consectetur ipsum sunt laboriosam delectus illum aut fugit cupiditate est, perspiciatis accusantium rerum sequi quasi et, doloribus non!
                            </div>

                            <div className="right__icon">
                                <ul className='list-icon'>
                                    <li>
                                        <a href="#">
                                            <i className='bx bxl-github'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className='bx bxl-linkedin-square' ></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className='bx bxl-facebook-square' ></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs