"use client"; // <===== REQUIRED

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image"; // import { useEffect } from "react";
import { images } from "@/data/images";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { LoginFields } from "@/components/ui/login/loginFields";
import { RegisterFields } from "@/components/ui/login/registerFields";
export default function Home() {
  const [showMe, setShowMe] = useState(0);
  const btnDefaultClassName =
    "w-24 inline-block px-4 py-2 text-sm font-medium text-gray-700 focus:relative bg-[#2252a0] text-white ";
  const registerBtnClassName = twMerge(
    btnDefaultClassName,
    showMe == 0 ? "bg-transparent text-[#2252a0]" : ""
  );
  const loginBtnClassName = twMerge(
    btnDefaultClassName,
    showMe == 1 ? "bg-transparent text-[#2252a0]" : ""
  );
  function toggle(id: number) {
    setShowMe(id);
  }

  return (
    <div className="splash-body flex   items-center justify-items-center px-[10vw]  min-w-screen min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex  w-[90vw] lg:w-[80vw] h-[80vh] rounded-3xl shadow-2xl backdrop-blur-sm backdrop-opacity-75 ">
        <div className=" hidden md:block flex-1 w-[40vw]  flex-col m-5 rounded-3xl shadow-2xl backdrop-blur-sm bg-white 	items-center justify-center ">
          {/* <Carousel images={images} autoplayInterval={3000} /> */}
          <Swiper
            className="h-full w-full rounded-lg"
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {images.map(({ id, src, title, alt }) => (
              <SwiperSlide key={id}>
                <div className="flex flex-col h-full w-full items-center justify-center">
                  <Image
                    className="  object-cover justify-center items-center"
                    alt={alt}
                    src={src}
                  />
                  <h4 className="text-black p-14"> {title}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className=" flex-1 flex flex-col items-center justify-center m-5">
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center justify-center my-4">
              <Image
                className="object-contain "
                width={100}
                height={100}
                src={"image/app-icon.svg"}
                alt="hi"
              ></Image>
            </div>
            <div className=" text-center text-white text-[38px] font-bold font-['IRANYekanMobile'] leading-snug">
              هـــوشان
            </div>
            <span className="h-12 inline-flex -space-x-px overflow-hidden border-white rounded-full border bg-white shadow-sm my-4">
              <button
                className={registerBtnClassName}
                onClick={() => toggle(0)}
              >
                ثبت نام
              </button>

              <button className={loginBtnClassName} onClick={() => toggle(1)}>
                ورود
              </button>
            </span>
          </div>
          <div className="flex-1 w-full  xl:px-24">
            {showMe == 0 ? (
              <RegisterFields></RegisterFields>
            ) : (
              <LoginFields></LoginFields>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
