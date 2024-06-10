// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import banner from '../../assets/banner.png';
import bannerMobile from '../../assets/banner_phone.png';
import bannerTablet from '../../assets/banner_tablet.png';

import { ReactComponent as ArrowLeft } from '../../assets/icons/ArrowLeft.svg';

// eslint-disable-next-line max-len
import { ReactComponent as ArrowRigth } from '../../assets/icons/ArrowRight.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.scss';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';

const getBannerSource = (windowWidth: number) => {
  if (windowWidth <= 639) {
    return bannerMobile;
  } else if (windowWidth <= 1199) {
    return bannerTablet;
  } else {
    return banner;
  }
};

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
    <>
      <div className="main-banner">
        <div className="sw-button-prev button-nav">
          <ArrowLeft />
        </div>

        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
          }}
          navigation={{
            prevEl: '.sw-button-prev',
            nextEl: '.sw-button-next',
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="image-slider"
              src={getBannerSource(windowWidth)}
              alt="Banner"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="image-slider"
              src={getBannerSource(windowWidth)}
              alt="Banner"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="image-slider"
              src={getBannerSource(windowWidth)}
              alt="Banner"
            />
          </SwiperSlide>
        </Swiper>
        <div className="sw-button-next button-nav">
          <ArrowRigth />
        </div>
      </div>
      <div className="swiper-pagination" />
    </>
  );
}
