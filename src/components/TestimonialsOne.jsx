"use client";
import { useEffect } from "react";
import { useLocale } from "@/context/LocaleContext";

const TestimonialsOne = () => {
  const { t } = useLocale();
  useEffect(() => {
    const loadSlick = async () => {
      if (typeof window !== "undefined") {
        const $ = (await import("jquery")).default;
        require("slick-carousel");

        const thumbsSlider = $(".testimonials__thumbs-slider");
        const mainSlider = $(".testimonials__slider");

        if (thumbsSlider.length && mainSlider.length) {
          // Initialize the sliders
          thumbsSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            rtl: $("html").attr("dir") === "rtl",
            asNavFor: ".testimonials__slider",
          });

          mainSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: ".testimonials__thumbs-slider",
            dots: false,
            arrows: true,
            rtl: $("html").attr("dir") === "rtl",
            focusOnSelect: true,
            nextArrow: "#testimonials-next",
            prevArrow: "#testimonials-prev",
          });
        }
      }
    };

    loadSlick();

    return () => {
      if (typeof window !== "undefined") {
        try {
          const $ = require("jquery");
          const thumbsSlider = $(".testimonials__thumbs-slider");
          const mainSlider = $(".testimonials__slider");
          if (thumbsSlider.length && thumbsSlider.hasClass("slick-initialized")) {
            thumbsSlider.slick("unslick");
          }
          if (mainSlider.length && mainSlider.hasClass("slick-initialized")) {
            mainSlider.slick("unslick");
          }
        } catch (_) {
          // Sliders may already be gone on navigation
        }
      }
    };
  }, []);
  return (
    <section className='testimonials py-120 position-relative z-1 bg-main-25'>
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape six animation-scalation'
      />
      <img
        src='assets/images/shapes/shape3.png'
        alt=''
        className='shape four animation-rotation'
      />
      <div className='container'>
        <div className='row gy-5'>
          <div className='col-lg-6'>
            <div className='testimonials__thumbs-slider pe-lg-5 me-xxl-5'>
              <div
                className='testimonials__thumbs wow bounceIn'
                data-tilt=''
                data-tilt-max={15}
                data-tilt-speed={500}
                data-tilt-perspective={5000}
                data-tilt-full-page-listening=''
              >
                <img src='assets/images/thumbs/testimonial-img1.png' alt='' />
              </div>
              <div
                className='testimonials__thumbs wow bounceIn'
                data-tilt=''
                data-tilt-max={15}
                data-tilt-speed={500}
                data-tilt-perspective={5000}
                data-tilt-full-page-listening=''
              >
                <img src='assets/images/thumbs/testimonial-img2.png' alt='' />
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='testimonials__content'>
              <div className='section-heading style-left'>
                <div className='flex-align gap-8 mb-16 wow bounceInDown'>
                  <span className='w-8 h-8 bg-main-600 rounded-circle' />
                  <h5 className='text-main-600 mb-0'>{t("testimonials.kicker")}</h5>
                </div>
                <h2 className='mb-24 wow bounceIn'>{t("testimonials.heading")}</h2>
                <p className='text-neutral-500 text-line-2 wow bounceInUp'>{t("testimonials.sub")}</p>
              </div>
              <div className='testimonials__slider'>
                <div className='testimonials-item'>
                  <ul
                    className='flex-align gap-8 mb-16'
                    data-aos='fade-left'
                    data-aos-duration={800}
                  >
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star-half' />
                    </li>
                  </ul>
                  <p
                    className='text-neutral-700'
                    data-aos='fade-left'
                    data-aos-duration={1200}
                  >
                    {t("testimonials.quote1")}
                  </p>
                  <h4 className='mt-48 mb-8' data-aos='fade-left'>
                    {t("testimonials.name1")}
                  </h4>
                  <span className='text-neutral-700' data-aos='fade-left'>
                    {t("testimonials.role1")}
                  </span>
                </div>
                <div className='testimonials-item'>
                  <ul
                    className='flex-align gap-8 mb-16'
                    data-aos='fade-left'
                    data-aos-duration={800}
                  >
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star-half' />
                    </li>
                  </ul>
                  <p
                    className='text-neutral-700'
                    data-aos='fade-left'
                    data-aos-duration={1200}
                  >
                    {t("testimonials.quote2")}
                  </p>
                  <h4 className='mt-48 mb-8' data-aos='fade-left'>
                    {t("testimonials.name2")}
                  </h4>
                  <span className='text-neutral-700' data-aos='fade-left'>
                    {t("testimonials.role2")}
                  </span>
                </div>
              </div>
              <div className='flex-align gap-16 mt-40'>
                <button
                  type='button'
                  id='testimonials-prev'
                  className=' slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48'
                >
                  <i className='ph ph-caret-left' />
                </button>
                <button
                  type='button'
                  id='testimonials-next'
                  className=' slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48'
                >
                  <i className='ph ph-caret-right' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsOne;
