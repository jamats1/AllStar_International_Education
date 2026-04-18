"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";

const FooterOne = () => {
  const { t, localizePath } = useLocale();

  return (
    <footer className='footer bg-main-25 position-relative z-1'>
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape five animation-scalation'
      />
      <img
        src='assets/images/shapes/shape6.png'
        alt=''
        className='shape one animation-scalation'
      />
      <div className='py-120 '>
        <div className='container container-two'>
          <div className='row row-cols-xxl-5 row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-5'>
            <div className='col' data-aos='fade-up' data-aos-duration={300}>
              <div className='footer-item'>
                <div className='footer-item__logo'>
                  <Link href={localizePath("/")}>
                    {" "}
                    <img src='assets/images/logo/logo.png' alt={t("site.name")} />
                  </Link>
                </div>
                <p className='my-32'>{t("footer.blurb")}</p>
                <ul className='social-list flex-align gap-24'>
                  <li className='social-list__item'>
                    <Link
                      href='https://www.facebook.com'
                      className='text-main-600 text-2xl hover-text-main-two-600'
                    >
                      <i className='ph-bold ph-facebook-logo' />
                    </Link>
                  </li>
                  <li className='social-list__item'>
                    <Link
                      href='https://www.twitter.com'
                      className='text-main-600 text-2xl hover-text-main-two-600'
                    >
                      {" "}
                      <i className='ph-bold ph-twitter-logo' />
                    </Link>
                  </li>
                  <li className='social-list__item'>
                    <Link
                      href='https://www.linkedin.com'
                      className='text-main-600 text-2xl hover-text-main-two-600'
                    >
                      <i className='ph-bold ph-instagram-logo' />
                    </Link>
                  </li>
                  <li className='social-list__item'>
                    <Link
                      href='https://www.pinterest.com'
                      className='text-main-600 text-2xl hover-text-main-two-600'
                    >
                      <i className='ph-bold ph-pinterest-logo' />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col' data-aos='fade-up' data-aos-duration={400}>
              <div className='footer-item'>
                <h4 className='footer-item__title mb-32'>{t("footer.navigation")}</h4>
                <ul className='footer-menu'>
                  <li className='mb-16'>
                    <Link
                      href={localizePath("/about")}
                      className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                    >
                      {t("footer.aboutUs")}
                    </Link>
                  </li>
                  <li className='mb-16'>
                    <Link
                      href={localizePath("/course")}
                      className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                    >
                      {t("footer.programs")}
                    </Link>
                  </li>
                  <li className='mb-16'>
                    <Link
                      href={localizePath("/instructor")}
                      className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                    >
                      {t("footer.instructor")}
                    </Link>
                  </li>
                  <li className='mb-16'>
                    <Link
                      href={localizePath("/faq")}
                      className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                    >
                      {t("footer.faqs")}
                    </Link>
                  </li>
                  <li className='mb-0'>
                    <Link
                      href={localizePath("/blog")}
                      className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                    >
                      {t("footer.blogs")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col' data-aos='fade-up' data-aos-duration={600}>
              <div className='footer-item'>
                <h4 className='footer-item__title mb-32'>{t("footer.category")}</h4>
                <ul className='footer-menu'>
                  <li className='mb-16'>
                    <Link
                      href={localizePath("/blog")}
                      className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                    >
                      {t("categories.cscUpdates")}
                    </Link>
                  </li>
                  <li className='mb-16'>
                    <Link
                      href={localizePath("/blog")}
                      className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                    >
                      {t("categories.scholarshipNews")}
                    </Link>
                  </li>
                  <li className='mb-16'>
                    <Link
                      href={localizePath("/blog")}
                      className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                    >
                      {t("categories.studyTips")}
                    </Link>
                  </li>
                  <li className='mb-16'>
                    <Link
                      href={localizePath("/blog")}
                      className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                    >
                      {t("categories.visaGuidance")}
                    </Link>
                  </li>
                  <li className='mb-16'>
                    <Link
                      href={localizePath("/blog")}
                      className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                    >
                      {t("categories.ieltsToefl")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col' data-aos='fade-up' data-aos-duration={800}>
              <div className='footer-item'>
                <h4 className='footer-item__title mb-32'>{t("footer.contactUs")}</h4>
                <div className='flex-align gap-20 mb-24'>
                  <span className='icon d-flex text-32 text-main-600'>
                    <i className='ph ph-phone' />
                  </span>
                  <div className=''>
                    <Link
                      href='tel:+12075550119'
                      className='text-neutral-500 d-block hover-text-main-600 mb-4'
                    >
                      (207) 555-0119
                    </Link>
                    <Link
                      href='tel:+17045550127'
                      className='text-neutral-500 d-block hover-text-main-600 mb-0'
                    >
                      (704) 555-0127
                    </Link>
                  </div>
                </div>
                <div className='flex-align gap-20 mb-24'>
                  <span className='icon d-flex text-32 text-main-600'>
                    <i className='ph ph-envelope-open' />
                  </span>
                  <div className=''>
                    <Link
                      href='mailto:allstaredu@gmail.com'
                      className='text-neutral-500 d-block hover-text-main-600 mb-4'
                    >
                      allstaredu@gmail.com
                    </Link>
                    <Link
                      href='mailto:info@allstar.edu'
                      className='text-neutral-500 d-block hover-text-main-600 mb-0'
                    >
                      info@allstar.edu
                    </Link>
                  </div>
                </div>
                <div className='flex-align gap-20 mb-24'>
                  <span className='icon d-flex text-32 text-main-600'>
                    <i className='ph ph-map-trifold' />
                  </span>
                  <div className=''>
                    <span className='text-neutral-500 d-block mb-0'>{t("footer.address")}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col' data-aos='fade-up' data-aos-duration={1000}>
              <div className='footer-item'>
                <h4 className='footer-item__title mb-32'>{t("footer.subscribe")}</h4>
                <p className='text-neutral-500'>{t("footer.subscribeText")}</p>
                <form action='#' className='mt-24 position-relative'>
                  <input
                    type='email'
                    className='form-control bg-white shadow-none border border-neutral-30 rounded-pill h-52 ps-24 pe-48 focus-border-main-600'
                    placeholder={t("footer.emailPlaceholder")}
                  />
                  <button
                    type='submit'
                    className='w-36 h-36 flex-center rounded-circle bg-main-600 text-white hover-bg-main-800 position-absolute top-50 translate-middle-y inset-inline-end-0 me-8'
                  >
                    <i className='ph ph-paper-plane-tilt' />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='bottom-footer bg-main-25 border-top border-dashed border-main-100 border-0 py-32'>
          <div className='container container-two'>
            <div className='bottom-footer__inner flex-between gap-3 flex-wrap'>
              <p className='bottom-footer__text'>
                {" "}
                {t("footer.copyright")} <span className='fw-semibold'>AllStar </span>
                {t("footer.rights")}
              </p>
              <div className='footer-links'>
                <Link
                  href={localizePath("/privacy-policy")}
                  className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                >
                  {t("footer.privacyPolicy")}
                </Link>
                <Link
                  href='#'
                  className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                >
                  {t("footer.terms")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
