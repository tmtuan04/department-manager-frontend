import { assets } from "../../../../assets/assets"
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Members.css'

const Members = () => {
    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="container">
                <div className="slider-container">
                    <Slider {...settings}>
                        {Array(6).fill(null).map((_, index) => {
                            return (
                                <>
                                    <div className="member" key={index}>
                                        <div className="member__img">
                                            <img src={assets.test_image} alt="ahihi" />
                                        </div>
                                        <div className="member__info">
                                            <div className="name">
                                                Nguyen Tran
                                            </div>
                                            <div className="sid">
                                                20225216
                                            </div>
                                        </div>
                                        <div className="member__quote">
                                            "Success is a journey, not a destination"
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Members