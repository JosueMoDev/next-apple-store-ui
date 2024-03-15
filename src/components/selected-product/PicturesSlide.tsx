import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { ProductImage } from "../product-image";
import { useState } from "react";
import "./slideshow.css";
import { ProductPicture } from "@/interfaces/product.interface";
import { PicturesByColor } from '../../interfaces/product.interface';

interface Props {
    name: string;
    picturesByColor: PicturesByColor[];
}
export default async function PicturesSlide({ picturesByColor, name }: Props) {

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

  return (
    <div>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 2500,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {picturesByColor.map(({ productPictures, color }, key) => (
          <SwiperSlide key={productPictures[0].url[0]}>
            <ProductImage
              width={1024}
              height={800}
              src={productPictures[0].url}
              alt={`${name}-${color}-${key}`}
              className="rounded-lg object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
