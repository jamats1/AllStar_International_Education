"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";

const BlogOne = () => {
  const { t, localizePath } = useLocale();

  return (
    <section className='blog py-120 mash-bg-main mash-bg-main-two position-relative'>
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape two animation-scalation'
      />
      <img
        src='assets/images/shapes/shape6.png'
        alt=''
        className='shape four animation-scalation'
      />
      <div className='container'>
        <div className='section-heading text-center'>
          <h2 className='mb-24 wow bounceIn'>{t("blog.heading")}</h2>
          <p className='wow bounceInUp'>{t("blog.sub")}</p>
        </div>
        <div className='row gy-4'>
          <div
            className='col-lg-4 col-sm-6'
            data-aos='fade-up'
            data-aos-duration={200}
          >
            <div className='blog-item scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30'>
              <div className='rounded-12 overflow-hidden position-relative'>
                <Link href={localizePath("/blog-details")} className='w-100 h-100'>
                  <img
                    src='assets/images/thumbs/blog-img1.png'
                    alt={t("blog.articleAlt")}
                    className='scale-hover-item__img rounded-12 cover-img transition-2'
                  />
                </Link>
              </div>
              <div className='p-24 pt-32'>
                <div className=''>
                  <span className='px-20 py-8 bg-main-two-600 rounded-8 text-white fw-medium mb-20'>
                    {t("blog.post1Tag")}
                  </span>
                  <h4 className='mb-28'>
                    <Link href={localizePath("/blog-details")} className='link text-line-2'>
                      {t("blog.post1Title")}
                    </Link>
                  </h4>
                  <div className='flex-align gap-14 flex-wrap my-20'>
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-500 text-2xl d-flex'>
                        <i className='ph ph-user-circle' />
                      </span>
                      <span className='text-neutral-500 text-lg'>Jeswal</span>
                    </div>
                    <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-500 text-2xl d-flex'>
                        <i className='ph ph-calendar-dot' />
                      </span>
                      <span className='text-neutral-500 text-lg'>12 May, 24</span>
                    </div>
                    <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-500 text-2xl d-flex'>
                        <i className='ph ph-chat-dots' />
                      </span>
                      <span className='text-neutral-500 text-lg'>24</span>
                    </div>
                  </div>
                  <p className='text-neutral-500 text-line-2'>{t("blog.post1Excerpt")}</p>
                </div>
                <div className='pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                  <Link
                    href={localizePath("/blog-details")}
                    className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                    tabIndex={0}
                  >
                    {t("blog.readMore")}
                    <i className='ph ph-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-lg-4 col-sm-6'
            data-aos='fade-up'
            data-aos-duration={400}
          >
            <div className='blog-item scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30'>
              <div className='rounded-12 overflow-hidden position-relative'>
                <Link href={localizePath("/blog-details")} className='w-100 h-100'>
                  <img
                    src='assets/images/thumbs/blog-img2.png'
                    alt={t("blog.articleAlt")}
                    className='scale-hover-item__img rounded-12 cover-img transition-2'
                  />
                </Link>
              </div>
              <div className='p-24 pt-32'>
                <div className=''>
                  <span className='px-20 py-8 bg-success-600 rounded-8 text-white fw-medium mb-20'>
                    {t("blog.post2Tag")}
                  </span>
                  <h4 className='mb-28'>
                    <Link href={localizePath("/blog-details")} className='link text-line-2'>
                      {t("blog.post2Title")}
                    </Link>
                  </h4>
                  <div className='flex-align gap-14 flex-wrap my-20'>
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-500 text-2xl d-flex'>
                        <i className='ph ph-user-circle' />
                      </span>
                      <span className='text-neutral-500 text-lg'>Jeswal</span>
                    </div>
                    <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-500 text-2xl d-flex'>
                        <i className='ph ph-calendar-dot' />
                      </span>
                      <span className='text-neutral-500 text-lg'>12 May, 24</span>
                    </div>
                    <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-500 text-2xl d-flex'>
                        <i className='ph ph-chat-dots' />
                      </span>
                      <span className='text-neutral-500 text-lg'>24</span>
                    </div>
                  </div>
                  <p className='text-neutral-500 text-line-2'>{t("blog.post2Excerpt")}</p>
                </div>
                <div className='pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                  <Link
                    href={localizePath("/blog-details")}
                    className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                    tabIndex={0}
                  >
                    {t("blog.readMore")}
                    <i className='ph ph-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-lg-4 col-sm-6'
            data-aos='fade-up'
            data-aos-duration={600}
          >
            <div className='blog-item scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30'>
              <div className='rounded-12 overflow-hidden position-relative'>
                <Link href={localizePath("/blog-details")} className='w-100 h-100'>
                  <img
                    src='assets/images/thumbs/blog-img3.png'
                    alt={t("blog.articleAlt")}
                    className='scale-hover-item__img rounded-12 cover-img transition-2'
                  />
                </Link>
              </div>
              <div className='p-24 pt-32'>
                <div className=''>
                  <span className='px-20 py-8 bg-main-two-600 rounded-8 text-white fw-medium mb-20'>
                    {t("blog.post3Tag")}
                  </span>
                  <h4 className='mb-28'>
                    <Link href={localizePath("/blog-details")} className='link text-line-2'>
                      {t("blog.post3Title")}
                    </Link>
                  </h4>
                  <div className='flex-align gap-14 flex-wrap my-20'>
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-500 text-2xl d-flex'>
                        <i className='ph ph-user-circle' />
                      </span>
                      <span className='text-neutral-500 text-lg'>Jeswal</span>
                    </div>
                    <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-500 text-2xl d-flex'>
                        <i className='ph ph-calendar-dot' />
                      </span>
                      <span className='text-neutral-500 text-lg'>12 May, 24</span>
                    </div>
                    <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-500 text-2xl d-flex'>
                        <i className='ph ph-chat-dots' />
                      </span>
                      <span className='text-neutral-500 text-lg'>24</span>
                    </div>
                  </div>
                  <p className='text-neutral-500 text-line-2'>{t("blog.post3Excerpt")}</p>
                </div>
                <div className='pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                  <Link
                    href={localizePath("/blog-details")}
                    className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                    tabIndex={0}
                  >
                    {t("blog.readMore")}
                    <i className='ph ph-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogOne;
