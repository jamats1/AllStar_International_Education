"use client";
import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import { useLocale } from "@/context/LocaleContext";

const ProductsDetailsInner = () => {
  const { t, localizePath, dict } = useLocale();
  const reviewComments = dict.blogDetails?.comments ?? [];
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const bigThumbsSettings = {
    slidesToShow: 1,
    fade: true,
    asNavFor: nav2,
    ref: (slider) => setNav1(slider),
  };

  const smallThumbsSettings = {
    slidesToShow: 4,
    centerMode: true,
    asNavFor: nav1,
    ref: (slider) => setNav2(slider),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const [activeIndex, setActiveIndex] = useState(1);

  let [count, setCount] = useState(1);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <section className='py-120'>
      <div className='container'>
        <div className='row gy-4'>
          <div className='col-xxl-6 col-lg-6'>
            <div className='product-big-thumbs bg-main-25 rounded-12 border border-neutral-30 p-24'>
              <Slider {...bigThumbsSettings} className='big-thumbs-slider'>
                <div>
                  <img
                    src='/assets/images/thumbs/product-big-img1.png'
                    alt={`${t("productDetails.imgProduct")} 1`}
                  />
                </div>
                <div>
                  <img
                    src='/assets/images/thumbs/product-big-img2.png'
                    alt={`${t("productDetails.imgProduct")} 2`}
                  />
                </div>
                <div>
                  <img
                    src='/assets/images/thumbs/product-big-img3.png'
                    alt={`${t("productDetails.imgProduct")} 3`}
                  />
                </div>
                <div>
                  <img
                    src='/assets/images/thumbs/product-big-img4.png'
                    alt={`${t("productDetails.imgProduct")} 4`}
                  />
                </div>
                <div>
                  <img
                    src='/assets/images/thumbs/product-big-img3.png'
                    alt={`${t("productDetails.imgProduct")} 5`}
                  />
                </div>
              </Slider>
            </div>
            <div className='mt-24'>
              <Slider
                {...smallThumbsSettings}
                className='product-small-thumbs small-thumbs-slider'
              >
                <div className='bg-main-25 rounded-8 border border-neutral-30 p-10 d-flex justify-content-center align-items-center'>
                  <img
                    src='/assets/images/thumbs/product-small-img1.png'
                    alt={`${t("productDetails.imgSmall")} 1`}
                  />
                </div>
                <div className='bg-main-25 rounded-8 border border-neutral-30 p-10 d-flex justify-content-center align-items-center'>
                  <img
                    src='/assets/images/thumbs/product-small-img2.png'
                    alt={`${t("productDetails.imgSmall")} 2`}
                  />
                </div>
                <div className='bg-main-25 rounded-8 border border-neutral-30 p-10 d-flex justify-content-center align-items-center'>
                  <img
                    src='/assets/images/thumbs/product-small-img3.png'
                    alt={`${t("productDetails.imgSmall")} 3`}
                  />
                </div>
                <div className='bg-main-25 rounded-8 border border-neutral-30 p-10 d-flex justify-content-center align-items-center'>
                  <img
                    src='/assets/images/thumbs/product-small-img4.png'
                    alt={`${t("productDetails.imgSmall")} 4`}
                  />
                </div>
                <div className='bg-main-25 rounded-8 border border-neutral-30 p-10 d-flex justify-content-center align-items-center'>
                  <img
                    src='/assets/images/thumbs/product-small-img3.png'
                    alt={`${t("productDetails.imgSmall")} 5`}
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div className='col-xxl-1 d-xxl-block d-none' />
          <div className='col-xxl-5 col-lg-6'>
            <div className=''>
              <div className='d-flex flex-column gap-24 align-items-start'>
                <span className='py-8 px-16 bg-main-two-600 rounded-8 text-white'>
                  {t("productDetails.sale")}
                </span>
                <span className='text-uppercase text-md text-success-600 fw-semibold'>
                  {t("productDetails.inStock")}
                </span>
                <h3 className='mb-0'>{t("productDetails.featuredTitle")}</h3>
                <div className='flex-align gap-8'>
                  <div className='flex-align gap-4'>
                    <span className='text-2xl fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-2xl fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-2xl fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-2xl fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-2xl fw-medium text-warning-600 d-flex'>
                      <i className='ph-bold ph-star' />
                    </span>
                  </div>
                  <span className='text-md text-neutral-500'>
                    {t("productDetails.reviewsShort")}
                  </span>
                </div>
                <h3 className='mb-0 text-main-600'>$95.25</h3>
                <p className='text-neutral-500'>
                  {t("productDetails.shortDesc")}
                </p>
              </div>
              <span className='d-block border border-neutral-30 border-dashed my-32' />
              <div className='d-flex flex-column gap-32 align-items-start'>
                <div className='d-flex align-items-center justify-content-between gap-8 w-100'>
                  <span className='text-lg text-neutral-700 fw-medium'>
                    {t("productDetails.color")}
                  </span>
                  <div className='color-list d-flex flex-wrap align-items-center gap-12'>
                    <button
                      type='button'
                      className={`color-list__button w-24 h-24 rounded-circle bg-primary-600 ${
                        activeIndex === 0 ? "active" : "border-neutral-50"
                      }`}
                      onClick={() => handleButtonClick(0)}
                    ></button>
                    <button
                      type='button'
                      className={`color-list__button w-24 h-24 rounded-circle bg-color-deep-green ${
                        activeIndex === 1 ? "active" : "border-neutral-50"
                      }`}
                      onClick={() => handleButtonClick(1)}
                    ></button>
                    <button
                      type='button'
                      className={`color-list__button w-24 h-24 rounded-circle bg-color-violet ${
                        activeIndex === 2 ? "active" : "border-neutral-50"
                      }`}
                      onClick={() => handleButtonClick(2)}
                    ></button>
                    <button
                      type='button'
                      className={`color-list__button w-24 h-24 rounded-circle bg-color-warning ${
                        activeIndex === 3 ? "active" : "border-neutral-50"
                      }`}
                      onClick={() => handleButtonClick(3)}
                    ></button>
                    <button
                      type='button'
                      className={`color-list__button w-24 h-24 rounded-circle bg-color-black ${
                        activeIndex === 4 ? "active" : "border-neutral-50"
                      }`}
                      onClick={() => handleButtonClick(4)}
                    ></button>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-between gap-8 w-100'>
                  <span className='text-lg text-neutral-700 fw-medium'>
                    {t("productDetails.size")}
                  </span>
                  <select className='common-input w-auto bg-main-25 border border-main-100 rounded-pill'>
                    <option value={32}>32</option>
                    <option value={24}>24</option>
                    <option value={16}>16</option>
                    <option value={8}>8</option>
                  </select>
                </div>
                <div className='d-flex align-items-center justify-content-between gap-8 w-100'>
                  <span className='text-lg text-neutral-700 fw-medium'>
                    {t("productDetails.quantity")}
                  </span>
                  <div className='border border-neutral-30 bg-main-25 rounded-pill p-4 max-w-116 w-100 d-flex justify-content-between'>
                    <button
                      onClick={() => setCount(count - 1)}
                      type='button'
                      disabled={count === 1}
                      className='quantity__minus item-active-effect transition-1 flex-shrink-0 text-md hover-text-white w-36 h-36 rounded-circle bg-white text-neutral-500 hover-bg-main-600 border border-neutral-30 hover-border-main-600 hover-text-white flex-center'
                    >
                      <i className='ph-bold ph-minus' />
                    </button>
                    <input
                      type='text'
                      className='quantity__input flex-grow-1 common-input border-0 bg-transparent text-center text-lg fw-semibold text-neutral-700 p-0'
                      value={count}
                    />
                    <button
                      onClick={() => setCount(count + 1)}
                      type='button'
                      className='quantity__plus item-active-effect transition-1 flex-shrink-0 text-md hover-text-white w-36 h-36 rounded-circle bg-white text-neutral-500 hover-bg-main-600 border border-neutral-30 hover-border-main-600 hover-text-white flex-center'
                    >
                      <i className='ph-bold ph-plus' />
                    </button>
                  </div>
                </div>
              </div>
              <span className='d-block border border-neutral-30 border-dashed my-32' />
              <div className='d-flex gap-24'>
                <Link
                  href={localizePath('/cart')}
                  className='flex-grow-1 btn btn-main rounded-pill flex-align gap-8'
                >
                  <i className='ph ph-shopping-cart d-sm-flex d-none text-lg' />
                  {t("productDetails.addToCart")}
                </Link>
                <Link
                  href={localizePath('/checkout')}
                  className='flex-grow-1 btn btn-outline-main rounded-pill flex-align gap-8'
                >
                  <i className='ph ph-tag d-sm-flex d-none text-lg' />
                  {t("productDetails.buyNow")}
                </Link>
              </div>
              <div className='mt-32 flex-align gap-24 justify-content-center flex-wrap'>
                <a
                  href='#'
                  className='flex-align gap-12 text-neutral-500 hover-text-main-600 text-lg'
                >
                  <i className='ph-bold ph-arrows-left-right d-flex' />
                  {t("productDetails.compare")}
                </a>
                <a
                  href='#'
                  className='flex-align gap-12 text-neutral-500 hover-text-main-600 text-lg'
                >
                  <i className='ph-bold ph-heart d-flex' />
                  {t("productDetails.favorite")}
                </a>
                <a
                  href='#'
                  className='flex-align gap-12 text-neutral-500 hover-text-main-600 text-lg'
                >
                  <i className='ph-bold ph-share-network d-flex' />
                  {t("productDetails.share")}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-120'>
          {/* Overview Start */}
          <div className='border border-neutral-30 rounded-12 bg-main-25 p-32 mt-24'>
            <div className='d-flex align-items-center flex-wrap gap-32'>
              <div className='bg-white rounded-16 p-32 d-flex justify-content-center align-items-center'>
                <img src='assets/images/thumbs/over-img.png' alt='' />
              </div>
              <div className=''>
                <h3 className='mb-24'>{t("productDetails.overview")}</h3>
                <p className='text-neutral-500 max-w-454'>
                  {t("productDetails.overviewP")}
                </p>
              </div>
            </div>
            <span className='d-block border border-neutral-30 border-dashed my-32' />
            <div className=''>
              <h4 className='mb-16'>{t("productDetails.whyHeading")}</h4>
              <p className='text-neutral-500'>
                {t("productDetails.whyP")}
              </p>
            </div>
            <span className='d-block border border-neutral-30 border-dashed my-32' />
            <div className=''>
              <h5 className='mb-16'>{t("productDetails.qualityHeading")}</h5>
              <p className='text-neutral-500'>
                {t("productDetails.qualityP")}
              </p>
            </div>
            <span className='d-block border border-neutral-30 border-dashed my-32' />
            <div className=''>
              <h6 className='mb-16'>{t("productDetails.supportHeading")}</h6>
              <p className='text-neutral-500'>
                {t("productDetails.supportP")}
              </p>
            </div>
          </div>
          {/* Overview End */}
          {/* Reviews Start */}
          <div className='border border-neutral-30 rounded-12 bg-main-25 p-32 mt-24'>
            <h5 className='mb-0'>{t("productDetails.avgReviews")}</h5>
            <span className='d-block border border-neutral-30 my-32 border-dashed' />
            <div className='d-flex flex-sm-row flex-column gap-36'>
              <div className='rounded-16 px-40 py-24 flex-center flex-column flex-shrink-0 text-center bg-main-600 text-white'>
                <h2 className='mb-8 text-white'>4.8</h2>
                <div className='flex-center gap-4'>
                  <span className='text-15 fw-medium text-white d-flex'>
                    <i className='ph-fill ph-star' />
                  </span>
                  <span className='text-15 fw-medium text-white d-flex'>
                    <i className='ph-fill ph-star' />
                  </span>
                  <span className='text-15 fw-medium text-white d-flex'>
                    <i className='ph-fill ph-star' />
                  </span>
                  <span className='text-15 fw-medium text-white d-flex'>
                    <i className='ph-fill ph-star' />
                  </span>
                  <span className='text-15 fw-medium text-white d-flex'>
                    <i className='ph-fill ph-star-half' />
                  </span>
                </div>
                <span className='mt-8 text-gray-500'>{t("productDetails.ratingCount")}</span>
              </div>
              <div className='flex-grow-1'>
                <div className='flex-align gap-20 mb-8'>
                  <div className='flex-align gap-8'>
                    <span className='text-lg fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-gray-900 flex-shrink-0'>5</span>
                  </div>
                  <div
                    className='progress w-100 bg-white rounded-pill h-12'
                    role='progressbar'
                    aria-label='Basic example'
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className='progress-bar bg-main-600 rounded-pill'
                      style={{ width: "90%" }}
                    />
                  </div>
                  <span className='text-gray-900 flex-shrink-0'>90%</span>
                </div>
                <div className='flex-align gap-20 mb-8'>
                  <div className='flex-align gap-8'>
                    <span className='text-lg fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-gray-900 flex-shrink-0'>5</span>
                  </div>
                  <div
                    className='progress w-100 bg-white rounded-pill h-12'
                    role='progressbar'
                    aria-label='Basic example'
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className='progress-bar bg-main-600 rounded-pill'
                      style={{ width: "75%" }}
                    />
                  </div>
                  <span className='text-gray-900 flex-shrink-0'>75%</span>
                </div>
                <div className='flex-align gap-20 mb-8'>
                  <div className='flex-align gap-8'>
                    <span className='text-lg fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-gray-900 flex-shrink-0'>5</span>
                  </div>
                  <div
                    className='progress w-100 bg-white rounded-pill h-12'
                    role='progressbar'
                    aria-label='Basic example'
                    aria-valuenow={67}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className='progress-bar bg-main-600 rounded-pill'
                      style={{ width: "67%" }}
                    />
                  </div>
                  <span className='text-gray-900 flex-shrink-0'>67%</span>
                </div>
                <div className='flex-align gap-20 mb-8'>
                  <div className='flex-align gap-8'>
                    <span className='text-lg fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-gray-900 flex-shrink-0'>5</span>
                  </div>
                  <div
                    className='progress w-100 bg-white rounded-pill h-12'
                    role='progressbar'
                    aria-label='Basic example'
                    aria-valuenow={44}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className='progress-bar bg-main-600 rounded-pill'
                      style={{ width: "44%" }}
                    />
                  </div>
                  <span className='text-gray-900 flex-shrink-0'>44%</span>
                </div>
                <div className='flex-align gap-20'>
                  <div className='flex-align gap-8'>
                    <span className='text-lg fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star' />
                    </span>
                    <span className='text-gray-900 flex-shrink-0'>5</span>
                  </div>
                  <div
                    className='progress w-100 bg-white rounded-pill h-12'
                    role='progressbar'
                    aria-label='Basic example'
                    aria-valuenow={21}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className='progress-bar bg-main-600 rounded-pill'
                      style={{ width: "21%" }}
                    />
                  </div>
                  <span className='text-gray-900 flex-shrink-0'>21%</span>
                </div>
              </div>
            </div>
            <span className='d-block border border-neutral-30 my-32 border-dashed' />
            <div className='flex-between gap-16 flex-wrap mb-24'>
              <h6 className='mb-0'>{t("productDetails.allReviews")}</h6>
              <div className='flex-align gap-16'>
                <div className='flex-align gap-8'>
                  <span className='text-neutral-500 flex-shrink-0'>
                    {t("blogGrid.sortBy")}
                  </span>
                  <select className='form-select ps-20 pe-28 py-8 fw-medium rounded-pill bg-main-25 border border-neutral-30 text-neutral-700'>
                    <option value={1}>{t("blogGrid.sortNewest")}</option>
                    <option value={1}>{t("blogGrid.sortTrending")}</option>
                    <option value={1}>{t("blogGrid.sortPopular")}</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Review Item */}
            <div className='border border-neutral-30 rounded-12 bg-white p-32'>
              <div className='flex-align gap-8 mb-16'>
                <span className='text-xl fw-medium text-warning-600 d-flex'>
                  <i className='ph-fill ph-star' />
                </span>
                <span className='text-xl fw-medium text-warning-600 d-flex'>
                  <i className='ph-fill ph-star' />
                </span>
                <span className='text-xl fw-medium text-warning-600 d-flex'>
                  <i className='ph-fill ph-star' />
                </span>
                <span className='text-xl fw-medium text-warning-600 d-flex'>
                  <i className='ph-fill ph-star' />
                </span>
                <span className='text-xl fw-medium text-warning-600 d-flex'>
                  <i className='ph-fill ph-star-half' />
                </span>
              </div>
              <p className='text-neutral-700'>
                {reviewComments[0]?.body}
              </p>
              <span className='d-block border border-neutral-30 my-24 border-dashed' />
              <div className='flex-align gap-24'>
                <img
                  src='assets/images/thumbs/reviewer-img1.png'
                  alt=''
                  className='w-60 h-60 rounded-circle cover-img'
                />
                <div className=''>
                  <h6 className='text-xl mb-8 fw-medium'>{reviewComments[0]?.name}</h6>
                  <span className='text-neutral-700 text-sm'>
                    {reviewComments[0]?.role}
                  </span>
                </div>
              </div>
              <span className='d-block border border-neutral-30 my-24 border-dashed' />
              <div className='flex-align flex-wrap gap-40'>
                <button
                  type='button'
                  className='like-button flex-align gap-8 text-neutral-500 hover-text-main-600'
                >
                  <span className='like-button__icon text-xl d-flex'>
                    <i className='ph-bold ph-thumbs-up' />
                  </span>
                  <span className='like-button__text'>178</span>
                </button>
                <a
                  href='#commentForm'
                  className='flex-align gap-8 text-neutral-500 hover-text-main-600'
                >
                  <i className='text-xl d-flex ph-bold ph-chat-centered-text' />
                    {t("blogDetails.reply")}
                  </a>
                </div>
                <div className='flex-align gap-20 mt-24'>
                  <img
                    src='assets/images/thumbs/reviewer-img2.png'
                  alt=''
                  className='w-60 h-60 rounded-circle cover-img'
                />
                <input
                  type='text'
                  className='common-input rounded-pill bg-main-25 border-neutral-30 py-16'
                    placeholder={t("blogDetails.joinDiscussionPh")}
                />
              </div>
            </div>
            {/* Review Item */}
            {/* Review Item */}
            <div className='border border-neutral-30 rounded-12 bg-white p-32 mt-24'>
              <div className='flex-align gap-8 mb-16'>
                <span className='text-xl fw-medium text-warning-600 d-flex'>
                  <i className='ph-fill ph-star' />
                </span>
                <span className='text-xl fw-medium text-warning-600 d-flex'>
                  <i className='ph-fill ph-star' />
                </span>
                <span className='text-xl fw-medium text-warning-600 d-flex'>
                  <i className='ph-fill ph-star' />
                </span>
                <span className='text-xl fw-medium text-warning-600 d-flex'>
                  <i className='ph-fill ph-star' />
                </span>
                <span className='text-xl fw-medium text-warning-600 d-flex'>
                  <i className='ph-fill ph-star-half' />
                </span>
              </div>
              <p className='text-neutral-700'>
                {reviewComments[1]?.body}
              </p>
              <span className='d-block border border-neutral-30 my-24 border-dashed' />
              <div className='flex-align gap-24'>
                <img
                  src='assets/images/thumbs/reviewer-img2.png'
                  alt=''
                  className='w-60 h-60 rounded-circle cover-img'
                />
                <div className=''>
                  <h6 className='text-xl mb-8 fw-medium'>{reviewComments[1]?.name}</h6>
                  <span className='text-neutral-700 text-sm'>
                    {reviewComments[1]?.role}
                  </span>
                </div>
              </div>
              <span className='d-block border border-neutral-30 my-24 border-dashed' />
              <div className='flex-align flex-wrap gap-40'>
                <button
                  type='button'
                  className='like-button flex-align gap-8 text-neutral-500 hover-text-main-600'
                >
                  <span className='like-button__icon text-xl d-flex'>
                    <i className='ph-bold ph-thumbs-up' />
                  </span>
                  <span className='like-button__text'>178</span>
                </button>
                <a
                  href='#commentForm'
                  className='flex-align gap-8 text-neutral-500 hover-text-main-600'
                >
                  <i className='text-xl d-flex ph-bold ph-chat-centered-text' />
                  {t("blogDetails.reply")}
                </a>
              </div>
            </div>
            {/* Review Item */}
            {/* Review Item */}
            <div className='border border-neutral-30 rounded-12 bg-white p-32 mt-24'>
              <div className='flex-align gap-8 mb-16'>
                <span className='text-xl fw-medium text-warning-600 d-flex'>
                  <i className='ph-fill ph-star' />
                </span>
                <span className='text-xl fw-medium text-warning-600 d-flex'>
                  <i className='ph-fill ph-star' />
                </span>
                <span className='text-xl fw-medium text-warning-600 d-flex'>
                  <i className='ph-fill ph-star' />
                </span>
                <span className='text-xl fw-medium text-warning-600 d-flex'>
                  <i className='ph-fill ph-star' />
                </span>
                <span className='text-xl fw-medium text-warning-600 d-flex'>
                  <i className='ph-fill ph-star-half' />
                </span>
              </div>
                           <p className='text-neutral-700'>
                {reviewComments[2]?.body}
              </p>
              <span className='d-block border border-neutral-30 my-24 border-dashed' />
              <div className='flex-align gap-24'>
                <img
                  src='assets/images/thumbs/reviewer-img3.png'
                  alt=''
                  className='w-60 h-60 rounded-circle cover-img'
                />
                <div className=''>
                  <h6 className='text-xl mb-8 fw-medium'>{reviewComments[2]?.name}</h6>
                  <span className='text-neutral-700 text-sm'>
                    {reviewComments[2]?.role}
                  </span>
                </div>
              </div>
              <span className='d-block border border-neutral-30 my-24 border-dashed' />
              <div className='flex-align flex-wrap gap-40'>
                <button
                  type='button'
                  className='like-button flex-align gap-8 text-neutral-500 hover-text-main-600'
                >
                  <span className='like-button__icon text-xl d-flex'>
                    <i className='ph-bold ph-thumbs-up' />
                  </span>
                  <span className='like-button__text'>178</span>
                </button>
                <a
                  href='#commentForm'
                  className='flex-align gap-8 text-neutral-500 hover-text-main-600'
                >
                  <i className='text-xl d-flex ph-bold ph-chat-centered-text' />
                  {t("blogDetails.reply")}
                </a>
              </div>
            </div>
            {/* Review Item */}
            <button
              type='button'
              className='btn btn-main rounded-pill flex-center gap-8 mt-40'
            >
              {t("productDetails.seeAllReviews")}
              <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
            </button>
          </div>
          {/* Reviews End */}
          {/* Review Form Start */}
          <div className='border border-neutral-30 rounded-12 bg-main-25 p-32 mt-24'>
            <form action='#' id='commentForm'>
              <h5 className='mb-0'>{t("productDetails.writeReview")}</h5>
              <span className='d-block border border-neutral-30 my-32 border-dashed' />
              <div className='mb-24'>
                <label
                  htmlFor='name'
                  className='text-neutral-700 text-lg fw-medium mb-12'
                >
                  {t("blogDetails.labelName")}{" "}
                </label>
                <input
                  type='text'
                  className='common-input rounded-pill'
                  id='name'
                  placeholder={t("contactPage.phName")}
                />
              </div>
              <div className='mb-24'>
                <label
                  htmlFor='email'
                  className='text-neutral-700 text-lg fw-medium mb-12'
                >
                  {t("blogDetails.labelEmail")}{" "}
                </label>
                <input
                  type='email'
                  className='common-input rounded-pill'
                  id='email'
                  placeholder={t("contactPage.phEmail")}
                />
              </div>
              <div className='mb-24'>
                <label className='text-neutral-700 text-lg fw-medium mb-12'>
                  {t("blogDetails.starReviews")}{" "}
                </label>
                <div id='half-star-rating'>
                  <div className='rating-group'>
                    <input
                      className='rating__input rating__input--none'
                      defaultChecked=''
                      name='rating2'
                      id='rating2-0'
                      defaultValue={0}
                      type='radio'
                    />
                    <label
                      aria-label='0 stars'
                      className='rating__label'
                      htmlFor='rating2-0'
                    >
                      &nbsp;
                    </label>
                    <label
                      aria-label='0.5 stars'
                      className='rating__label rating__label--half'
                      htmlFor='rating2-05'
                    >
                      <i className='rating__icon rating__icon--star ph-fill ph-star-half' />
                    </label>
                    <input
                      className='rating__input'
                      name='rating2'
                      id='rating2-05'
                      defaultValue='0.5'
                      type='radio'
                    />
                    <label
                      aria-label='1 star'
                      className='rating__label'
                      htmlFor='rating2-10'
                    >
                      <i className='rating__icon rating__icon--star ph-fill ph-star' />
                    </label>
                    <input
                      className='rating__input'
                      name='rating2'
                      id='rating2-10'
                      defaultValue={1}
                      type='radio'
                    />
                    <label
                      aria-label='1.5 stars'
                      className='rating__label rating__label--half'
                      htmlFor='rating2-15'
                    >
                      <i className='rating__icon rating__icon--star ph-fill ph-star-half' />
                    </label>
                    <input
                      className='rating__input'
                      name='rating2'
                      id='rating2-15'
                      defaultValue='1.5'
                      type='radio'
                    />
                    <label
                      aria-label='2 stars'
                      className='rating__label'
                      htmlFor='rating2-20'
                    >
                      <i className='rating__icon rating__icon--star ph-fill ph-star' />
                    </label>
                    <input
                      className='rating__input'
                      name='rating2'
                      id='rating2-20'
                      defaultValue={2}
                      type='radio'
                    />
                    <label
                      aria-label='2.5 stars'
                      className='rating__label rating__label--half'
                      htmlFor='rating2-25'
                    >
                      <i className='rating__icon rating__icon--star ph-fill ph-star-half' />
                    </label>
                    <input
                      className='rating__input'
                      name='rating2'
                      id='rating2-25'
                      defaultValue='2.5'
                      type='radio'
                      defaultChecked=''
                    />
                    <label
                      aria-label='3 stars'
                      className='rating__label'
                      htmlFor='rating2-30'
                    >
                      <i className='rating__icon rating__icon--star ph-fill ph-star' />
                    </label>
                    <input
                      className='rating__input'
                      name='rating2'
                      id='rating2-30'
                      defaultValue={3}
                      type='radio'
                    />
                    <label
                      aria-label='3.5 stars'
                      className='rating__label rating__label--half'
                      htmlFor='rating2-35'
                    >
                      <i className='rating__icon rating__icon--star ph-fill ph-star-half' />
                    </label>
                    <input
                      className='rating__input'
                      name='rating2'
                      id='rating2-35'
                      defaultValue='3.5'
                      type='radio'
                    />
                    <label
                      aria-label='4 stars'
                      className='rating__label'
                      htmlFor='rating2-40'
                    >
                      <i className='rating__icon rating__icon--star ph-fill ph-star' />
                    </label>
                    <input
                      className='rating__input'
                      name='rating2'
                      id='rating2-40'
                      defaultValue={4}
                      type='radio'
                    />
                    <label
                      aria-label='4.5 stars'
                      className='rating__label rating__label--half'
                      htmlFor='rating2-45'
                    >
                      <i className='rating__icon rating__icon--star ph-fill ph-star-half' />
                    </label>
                    <input
                      className='rating__input'
                      name='rating2'
                      id='rating2-45'
                      defaultValue='4.5'
                      type='radio'
                    />
                    <label
                      aria-label='5 stars'
                      className='rating__label'
                      htmlFor='rating2-50'
                    >
                      <i className='rating__icon rating__icon--star ph-fill ph-star' />
                    </label>
                    <input
                      className='rating__input'
                      name='rating2'
                      id='rating2-50'
                      defaultValue={5}
                      type='radio'
                    />
                  </div>
                </div>
              </div>
              <div className='mb-24'>
                <label
                  htmlFor='desc'
                  className='text-neutral-700 text-lg fw-medium mb-12'
                >
                  {t("blogDetails.yourQuestion")}{" "}
                </label>
                <textarea
                  id='desc'
                  className='common-input rounded-24'
                  placeholder={t("blogDetails.questionPh")}
                  defaultValue={""}
                />
              </div>
              <div className='mb-0'>
                <button
                  type='submit'
                  className='btn btn-main rounded-pill flex-center gap-8 mt-40'
                >
                  {t("productDetails.submitReview")}
                  <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                </button>
              </div>
            </form>
          </div>
          {/* Review Form End */}
        </div>
      </div>
    </section>
  );
};

export default ProductsDetailsInner;
