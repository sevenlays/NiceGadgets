// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import banner from '../../assets/banner.png';
import bannerMobile from '../../assets/banner_phone.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.scss';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';

export function HomeSlider() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="swiper-button-prev button-nav">
        {/* <ArrowLeft /> */}
        Prev
      </div>

      <Swiper
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="image-slider"
            src={windowWidth <= 639 ? bannerMobile : banner}
            alt="Banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="image-slider"
            src={windowWidth <= 639 ? bannerMobile : banner}
            alt="Banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="image-slider"
            src={windowWidth <= 639 ? bannerMobile : banner}
            alt="Banner"
          />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-prev button-nav">
        {/* <ArrowLeft /> */}
        Next
      </div>
    </div>
  );
}
