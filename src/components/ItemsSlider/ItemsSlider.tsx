// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import './ItemsSlider.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ProductCard } from '../ProductCard/ProductCard';
import { FC } from 'react';

interface ItemsSliderProps {
  prevButtonClass: string;
  nextButtonClass: string;
}

export const ItemsSlider: FC<ItemsSliderProps> = ({
  prevButtonClass,
  nextButtonClass,
}) => {
  return (
    <div className="itemsSlider-wrapper">
      <Swiper
        slidesPerView={4}
        slidesPerGroup={1}
        spaceBetween={14}
        loop={true}
        navigation={{
          prevEl: `.${prevButtonClass}`,
          nextEl: `.${nextButtonClass}`,
        }}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div className="productCard_wrapper">
            <ProductCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="productCard_wrapper">
            <ProductCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="productCard_wrapper">
            <ProductCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="productCard_wrapper">
            <ProductCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="productCard_wrapper">
            <ProductCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="productCard_wrapper">
            <ProductCard />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
