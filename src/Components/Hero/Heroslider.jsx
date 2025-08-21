import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";  
const slides = [
  {
    image: "https://images.wagwalkingweb.com/media/care/veterinary-animal-welfare/veterinary-animal-welfare.jpg",
    title: "Animal Welfare",
    subtitle: "Take care of an animal, and it will never forget you.",
    link: "#",
  },
  {
    image: "https://www.actionsa.org.za/wp-content/uploads/2020/09/social-justice.jpg",
    title: "Social Justice",
    subtitle: "Injustice anywhere is a threat to justice everywhere.",
    link: "#",
  },
  {
    image: "https://lotusdiagnostic.com/wp-content/uploads/2023/01/close-up-doctor-with-stethoscope.jpg",
    title: "Healthcare Movement",
    subtitle: "Working Towards a Healthier Nation",
    link: "#",
  },
  {
    image: "https://www.smilefoundationindia.org/blog/wp-content/uploads/2023/12/swabhiman-4.jpg",
    title: "Women Education & Empowerment",
    subtitle: "Educate a girl, change the world!",
    link: "#",
  },
  {
    image: "https://en.vcci.com.vn/hm_content/uploads/247-news/bao-ve-moi-truong-nen-tang-thuc-day-phat-trien-kinh-te.jpg",
    title: "Environment Protection",
    subtitle: "The greatest threat to our planet is the belief that someone else will save it",
    link: "#",
  },
  {
    image: "https://www.bikeability.org.uk/wp-content/uploads/2025/02/C4A2948_web-e1740053073412-1200x634.jpg",
    title: "Road Safety",
    subtitle: "the prevention and protection of road accidents by using all the road safety measures",
    link: "#",
  },
  
];

export default function Heroslider() {
  return (
    <section className="relative w-full h-[90vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-start px-10 lg:px-24 text-white">
                <h1 className="text-4xl lg:text-6xl font-bold max-w-3xl leading-tight">
                  {slide.title}
                </h1>
                <p className="mt-4 text-lg lg:text-xl max-w-xl">
                  {slide.subtitle}
                </p>
                <a
                  href={slide.link}
                  className="mt-6 px-6 py-3 bg-yellow-500 text-lg font-semibold rounded-full hover:bg-yellow-600 transition"
                >
                  Know More
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}