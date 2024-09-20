import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade"; // Import fade effect CSS
import "./product-card/deal.css";
import { useEffect, useState } from "react";

const ProductSlider = () => {
  const [time, setTime] = useState({
    days: 110,
    hours: 3,
    minutes: 17,
    seconds: 6,
  });

  const formatTime = (num) => (num < 10 ? `0${num}` : num);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      updateTime();
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timerInterval);
  }, [time]);

  // Update the time function
  const updateTime = () => {
    const { days, hours, minutes, seconds } = time;

    if (seconds > 0) {
      setTime({ ...time, seconds: seconds - 1 });
    } else if (minutes > 0) {
      setTime({ ...time, minutes: minutes - 1, seconds: 59 });
    } else if (hours > 0) {
      setTime({ ...time, hours: hours - 1, minutes: 59, seconds: 59 });
    } else if (days > 0) {
      setTime({ ...time, days: days - 1, hours: 23, minutes: 59, seconds: 59 });
    }
  };
  return (
    <>
      <section className="section-deal border-2 absolute translate-y-12 lg:translate-y-56  z-20 flex w-[20rem] px-2 py-4 ml-10 lg:items-center lg:justify-center  glass lg:w-[32rem] hidden md:block ">
        <div className="bg-banner-deal">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-wrap">
              <div className="w-full ">
                <div className="cr-deal-rightside">
                  <div className="cr-deal-content space-y-3 " data-aos="fade-up" data-aos-duration="2000">
                    <span className="font-bold">
                      <code className="text-[#F3473A]">40%</code> OFF
                    </span>
                    <h4 className="cr-deal-title text-black text-3xl font-bold">Great deal on Womens Fashion.</h4>
                    <p className=" ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel
                      facilisis.
                    </p>
                    <div id="timer" className="cr-counter border-2 border-gray-300 rounded-md inline-block px-7 py-2">
                      <div className="cr-counter-inner flex space-x-4 mx-auto font-bold ">
                        <h4 className="flex flex-col">
                          <span id="days">{formatTime(time.days)}</span>
                          Days
                        </h4>
                        <div className=" mt-3 font-bold text-lg">:</div>
                        <h4 className="flex flex-col">
                          <span id="hours">{formatTime(time.hours)}</span>
                          Hrs
                        </h4>
                        <div className=" mt-3 font-bold text-lg">:</div>
                        <h4 className="flex flex-col">
                          <span id="minutes">{formatTime(time.minutes)}</span>
                          Min
                        </h4>
                        <div className=" mt-3 font-bold text-lg">:</div>
                        <h4 className="flex flex-col">
                          <span id="seconds">{formatTime(time.seconds)}</span>
                          Sec
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section> for smaller screen media  </section> */}
      <section className="block md:hidden glass absolute z-20 mt-36 rounded-sm px-3 py-3 ml-4 font-semibold text-black">
        <h3>
          40% <span> OFF</span>
        </h3>
        <h2>Great deal on {"Womens"} Fashion.</h2>
        {/* <div id="timer" className="cr-counter border-2 border-gray-300 rounded-md inline-block px-7 py-2"></div> */}
      </section>

      <Swiper
        data-aos="zoom-in"
        data-aos-duration="3000"
        loop={true}
        modules={[Scrollbar, A11y, EffectFade, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        effect="fade" // Apply the fade effect
        fadeEffect={{ crossFade: true }} // Ensure cross-fade is enabled for smoother transitions
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Change image every 3 seconds
        speed={1000} // Speed of the fade effect
        className="mb-4 mx-auto max-w-[1550px] z-10">
        <SwiperSlide className="w-full">
          <img src="/deal/bg-deal-2.jpg" alt="Deal 2" className="w-full h-[20rem]  md:h-[25rem] lg:h-[40rem]" />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <img src="/deal/bg-deal-3.jpg" alt="Deal 3" className="w-full h-[20rem]  md:h-[25rem] lg:h-[40rem]" />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <img src="/deal/bg-deal.jpg" alt="Deal" className="w-full h-[20rem]  md:h-[25rem] lg:h-[40rem]" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductSlider;
