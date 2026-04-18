"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";

const IMG_SUFFIX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3];

const BlogListInner = () => {
  const { t, localizePath, dict } = useLocale();
  const titles = dict.blogList?.titles ?? [];

  return (
    <div className='blog-page-section py-120'>
      <div className='container'>
        <div className='flex-between gap-16 flex-wrap mb-40'>
          <span className='text-neutral-500'>{t("common.showingPagedResults")}</span>
          <div className='flex-align gap-16'>
            <div className='flex-align gap-8'>
              <span className='text-neutral-500 flex-shrink-0'>{t("blogGrid.sortBy")}</span>
              <select className='form-select ps-20 pe-28 py-8 fw-medium rounded-pill bg-main-25 border border-neutral-30 text-neutral-700'>
                <option value={1}>{t("blogGrid.sortNewest")}</option>
                <option value={1}>{t("blogGrid.sortTrending")}</option>
                <option value={1}>{t("blogGrid.sortPopular")}</option>
              </select>
            </div>
            <button
              type='button'
              className='list-bar-btn text-xl w-40 h-40 bg-main-600 text-white rounded-8 flex-center d-lg-none'
            >
              <i className='ph-bold ph-funnel' />
            </button>
          </div>
        </div>
        <div className='row gy-4'>
          {IMG_SUFFIX.map((imgNum, idx) => (
            <div className='col-lg-6' key={`${imgNum}-${idx}`}>
              <div className='scale-hover-item bg-main-25 rounded-16 p-12 h-100 border border-neutral-30 d-flex flex-sm-row flex-column'>
                <div className='course-item__thumb rounded-12 overflow-hidden position-relative max-w-274  w-50'>
                  <Link href={localizePath('/blog-details')} className='w-100 h-100'>
                    <img
                      src={`assets/images/thumbs/blog-two-img${imgNum}.png`}
                      alt={t("common.courseImageAlt")}
                      className='scale-hover-item__img rounded-12 cover-img transition-2'
                    />
                  </Link>
                  <div className='position-absolute inset-inline-start-0 inset-block-start-0 ms-16 mt-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium'>
                    <h3 className='mb-0 text-white fw-medium'>21</h3>
                    {t("blogGrid.dec")}
                  </div>
                </div>
                <div className='p-20 position-relative  w-50 '>
                  <div className='flex-align gap-14 flex-wrap mb-20'>
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-500 text-2xl d-flex'>
                        <i className='ph ph-user-circle' />
                      </span>
                      <span className='text-neutral-500 text-lg'>{t("blogGrid.byAdmin")}</span>
                    </div>
                    <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                    <div className='flex-align gap-8'>
                      <span className='text-neutral-500 text-2xl d-flex'>
                        <i className='ph ph-chat-dots' />
                      </span>
                      <span className='text-neutral-500 text-lg'>24</span>
                    </div>
                  </div>
                  <h4 className='mb-28'>
                    <Link href={localizePath('/blog-details')} className='link text-line-3 '>
                      {titles[idx] ?? ""}
                    </Link>
                  </h4>
                  <div className='flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                    <Link
                      href={localizePath('/blog-details')}
                      className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                      tabIndex={0}
                    >
                      {t("blogGrid.readMore")}
                      <i className='ph ph-arrow-right' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListInner;
