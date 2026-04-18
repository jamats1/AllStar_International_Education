"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";

const FavoriteCourseInner = () => {
  const { t, localizePath, dict, formatMoney } = useLocale();
  const fc = dict.favoriteCourse;
  if (!fc) return null;
  const { titles, durations, prices, instructors } = fc;

  return (
    <section className='favorite-course py-120'>
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center justify-content-between mb-24'>
          <span className='text-neutral-700'>{fc.heading}</span>
          <button
            type='button'
            className='btn btn-outline-main py-12 px-24 rounded-pill flex-align gap-8 aos-init aos-animate fw-semibold'
            data-aos='fade-left'
          >
            <i className='ph-bold ph-trash d-flex text-lg' />
            {fc.removeAll}
          </button>
        </div>
        <div className='row gy-4'>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className='col-lg-4 col-sm-6 wow fadeInUp'
              data-aos='fade-up'
              data-aos-duration={200 + i * 200}
            >
              <div className='course-item bg-white rounded-16 p-12 h-100 box-shadow-md'>
                <div className='course-item__thumb rounded-12 overflow-hidden position-relative'>
                  <Link href={localizePath('/course-details')} className='w-100 h-100'>
                    <img
                      src={`assets/images/thumbs/course-img${i + 1}.png`}
                      alt={t("common.courseImageAlt")}
                      className='course-item__img rounded-12 cover-img transition-2'
                    />
                  </Link>
                  <div className='flex-align gap-8 bg-main-600 rounded-pill px-24 py-12 text-white position-absolute inset-block-start-0 inset-inline-start-0 mt-20 ms-20 z-1'>
                    <span className='text-2xl d-flex'>
                      <i className='ph ph-clock' />
                    </span>
                    <span className='text-lg fw-medium'>{durations[i]}</span>
                  </div>
                  <button
                    type='button'
                    className='wishlist-btn w-48 h-48 bg-white flex-center position-absolute inset-block-start-0 inset-inline-end-0 mt-20 me-20 z-1 text-2xl rounded-circle transition-2 text-white bg-main-two-600'
                  >
                    <i className='ph ph-heart' />
                  </button>
                </div>
                <div className='course-item__content'>
                  <div className=''>
                    <h4 className='mb-28'>
                      <Link href={localizePath('/course-details')} className='link text-line-2'>
                        {titles[i]}
                      </Link>
                    </h4>
                    <div className='flex-between gap-8 flex-wrap mb-16'>
                      <div className='flex-align gap-8'>
                        <span className='text-neutral-700 text-2xl d-flex'>
                          <i className='ph-bold ph-video-camera' />
                        </span>
                        <span className='text-neutral-700 text-lg fw-medium'>{t("common.lessonsCount")}</span>
                      </div>
                      <div className='flex-align gap-8'>
                        <span className='text-neutral-700 text-2xl d-flex'>
                          <i className='ph-bold ph-chart-bar' />
                        </span>
                        <span className='text-neutral-700 text-lg fw-medium'>{t("courseCard.beginner")}</span>
                      </div>
                    </div>
                    <div className='flex-between gap-8 flex-wrap'>
                      <div className='flex-align gap-4'>
                        <span className='text-2xl fw-medium text-warning-600 d-flex'>
                          <i className='ph-fill ph-star' />
                        </span>
                        <span className='text-lg text-neutral-700'>
                          4.7
                          <span className='text-neutral-100'>(6.4k)</span>
                        </span>
                      </div>
                      <div className='flex-align gap-8'>
                        <span className='text-neutral-700 text-2xl d-flex'>
                          <img
                            src={`assets/images/thumbs/user-img${i + 1}.png`}
                            alt={t("common.userImageAlt")}
                            className='w-32 h-32 object-fit-cover rounded-circle'
                          />
                        </span>
                        <span className='text-neutral-700 text-lg fw-medium'>{instructors[i]}</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                    <h4 className='mb-0 text-main-two-600'>{formatMoney(prices[i])}</h4>
                    <Link
                      href={localizePath('/apply-admission')}
                      className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                      tabIndex={0}
                    >
                      {t("common.enrollNow")}
                      <i className='ph ph-arrow-right' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavoriteCourseInner;
