import { assets } from "../../../../assets/assets";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Members.css";

const Members = () => {
  const member = [
    {
      fullName: "Bùi Lê Hùng",
      sid: "20224994",
      img: assets.Hung,
      role: "Backend Team",
    },
    {
      fullName: "Bùi Lê Huy",
      sid: "20225005",
      img: assets.Huy,
      role: "Backend Team",
    },
    {
      fullName: "Nguyễn Đạt Trọng",
      sid: "20225103",
      img: assets.Trong,
      role: "Backend Team",
    },
    {
      fullName: "Từ Minh Tuân",
      sid: "20225422",
      img: assets.Tuan,
      role: "Frontend Team",
    },
    {
      fullName: "Trương Ngọc Hải",
      sid: "20225309",
      img: assets.Hai,
      role: "Frontend Team",
    },
    {
      fullName: "Trần Trọng Nguyên",
      sid: "20225216",
      img: assets.Nguyen,
      role: "Frontend Team",
    },
  ];

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 600,
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container-tdn">
        <div className="slider-container">
          {/* Đang báo lỗi ở dòng 86 này */}
          <Slider {...settings}>
            {member.map((item, index) => {
              return (
                <>
                  <div className="member" key={index}>
                    <div className="member__img">
                      <img src={item.img} alt="ahihi" />
                    </div>
                    <div className="member__info">
                      <div className="name">{item.fullName}</div>
                      <div className="sid">{item.sid}</div>
                    </div>
                    <div className="member__role">{item.role}</div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Members;
