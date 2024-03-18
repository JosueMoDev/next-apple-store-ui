"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./slideshow.css";
import { PicturesByColor } from "../../interfaces/product.interface";
import Image from "next/image";

interface Props {
  name: string;
  picturesByColor: PicturesByColor[];
}
export const  PicturesSlide = ({ picturesByColor, name }: Props) => {
  const {  productPictures} = picturesByColor[0];
  return (
    <div className="w-full">
      <Swiper
        autoplay={{
          delay: 2500,
        }}
        spaceBetween={10}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {productPictures.map(({ id, url }) => (
          <SwiperSlide key={id}>
            <Image
              width={1080}
              height={720}
              src={url}
              alt={name}
              className="rounded-lg object-fill"
              priority={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

