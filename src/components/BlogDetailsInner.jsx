"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";

const BlogDetailsInner = () => {
  const { t, localizePath, dict } = useLocale();
  const bd = dict.blogDetails;
  if (!bd) return null;

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
          <div className='col-lg-8'>
            <div className='bg-main-25 rounded-16 p-12 border border-neutral-30'>
              <div className='rounded-12 overflow-hidden position-relative'>
                <img
                  src='assets/images/thumbs/blog-details-img.png'
                  alt={bd.heroAlt}
                  className='rounded-12 cover-img transition-2'
                />
                <div className='position-absolute inset-inline-end-0 inset-block-end-0 me-16 mb-16 py-12 px-24 rounded-8 bg-main-two-600 text-white fw-medium'>
                  <h3 className='mb-0 text-white fw-medium'>21</h3>
                  {bd.monthShort}
                </div>
              </div>
              <div className='pt-32 pb-24 px-16 position-relative'>
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
                      <i className='ph-bold ph-eye' />
                    </span>
                    <span className='text-neutral-500 text-lg'>1.6k</span>
                  </div>
                  <span className='w-8 h-8 bg-neutral-100 rounded-circle' />
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-500 text-2xl d-flex'>
                      <i className='ph ph-chat-dots' />
                    </span>
                    <span className='text-neutral-500 text-lg'>24</span>
                  </div>
                </div>
                <h2 className='mb-24'>{bd.title}</h2>
                <p className='text-neutral-500 mb-32'>{bd.intro}</p>
                <h6 className='mb-16 text-neutral-500 text-lg'>{bd.keyPointsHeading}</h6>
                <ul className='list-dotted d-flex flex-column gap-8'>
                  {bd.keyPoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {bd.sections.map((section) => {
                  const Tag = section.tag;
                  return (
                    <div key={section.heading}>
                      <span className='d-block border border-neutral-30 my-32 border-dashed' />
                      <Tag className='mb-16 text-neutral-500 text-lg'>{section.heading}</Tag>
                      <ul className='list-dotted d-flex flex-column gap-8'>
                        {section.items.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
                <span className='d-block border border-neutral-30 my-32 border-dashed' />
                <p className='text-neutral-500 mt-24'>{bd.closing}</p>
              </div>
            </div>
            <div className='border border-neutral-30 rounded-12 bg-main-25 p-32 mt-24'>
              <div className='flex-between gap-16 flex-wrap mb-24'>
                <h4 className='mb-0'>{bd.allComments}</h4>
                <div className='flex-align gap-16'>
                  <div className='flex-align gap-8'>
                    <span className='text-neutral-500 flex-shrink-0'>{t("blogGrid.sortBy")}</span>
                    <select className='form-select ps-20 pe-28 py-8 fw-medium rounded-pill bg-main-25 border border-neutral-30 text-neutral-700'>
                      <option value={1}>{t("blogGrid.sortNewest")}</option>
                      <option value={1}>{t("blogGrid.sortTrending")}</option>
                      <option value={1}>{t("blogGrid.sortPopular")}</option>
                    </select>
                  </div>
                </div>
              </div>
              {bd.comments.map((c, idx) => (
                <div
                  key={`${c.name}-${idx}`}
                  className={`border border-neutral-30 rounded-12 bg-white p-32 ${idx > 0 ? "mt-24" : ""}`}
                >
                  <div className='flex-align gap-8 mb-16'>
                    {[0, 1, 2, 3].map((i) => (
                      <span key={i} className='text-xl fw-medium text-warning-600 d-flex'>
                        <i className='ph-fill ph-star' />
                      </span>
                    ))}
                    <span className='text-xl fw-medium text-warning-600 d-flex'>
                      <i className='ph-fill ph-star-half' />
                    </span>
                  </div>
                  <p className='text-neutral-700'>{c.body}</p>
                  <span className='d-block border border-neutral-30 my-24 border-dashed' />
                  <div className='flex-align gap-24'>
                    <img
                      src={`assets/images/thumbs/reviewer-img${idx + 1}.png`}
                      alt=''
                      className='w-60 h-60 rounded-circle cover-img'
                    />
                    <div className=''>
                      <h6 className='text-xl mb-8 fw-medium'>{c.name}</h6>
                      <span className='text-neutral-700 text-sm'>{c.role}</span>
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
                    <a href='#commentForm' className='flex-align gap-8 text-neutral-500 hover-text-main-600'>
                      <i className='text-xl d-flex ph-bold ph-chat-centered-text' />
                      {bd.reply}
                    </a>
                  </div>
                  {idx === 0 ? (
                    <div className='flex-align gap-20 mt-24'>
                      <img
                        src='assets/images/thumbs/reviewer-img2.png'
                        alt=''
                        className='w-60 h-60 rounded-circle cover-img'
                      />
                      <input
                        type='text'
                        className='common-input rounded-pill bg-main-25 border-neutral-30 py-16'
                        placeholder={bd.joinDiscussionPh}
                      />
                    </div>
                  ) : null}
                </div>
              ))}
              <button type='button' className='btn btn-main rounded-pill flex-center gap-8 mt-40'>
                {bd.seeAllComments}
                <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
              </button>
            </div>
            <div className='border border-neutral-30 rounded-12 bg-main-25 p-32 mt-24'>
              <form action='#' id='commentForm'>
                <h5 className='mb-0'>{bd.writeComment}</h5>
                <span className='d-block border border-neutral-30 my-32 border-dashed' />
                <div className='mb-24'>
                  <label htmlFor='name' className='text-neutral-700 text-lg fw-medium mb-12'>
                    {bd.labelName}{" "}
                  </label>
                  <input
                    type='text'
                    className='common-input rounded-pill'
                    id='name'
                    placeholder={t("contactPage.phName")}
                  />
                </div>
                <div className='mb-24'>
                  <label htmlFor='email' className='text-neutral-700 text-lg fw-medium mb-12'>
                    {bd.labelEmail}{" "}
                  </label>
                  <input
                    type='email'
                    className='common-input rounded-pill'
                    id='email'
                    placeholder={t("contactPage.phEmail")}
                  />
                </div>
                <div className='mb-24'>
                  <label className='text-neutral-700 text-lg fw-medium mb-12'>{bd.starReviews} </label>
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
                      <label aria-label='0 stars' className='rating__label' htmlFor='rating2-0'>
                        &nbsp;
                      </label>
                      <label
                        aria-label='0.5 stars'
                        className='rating__label rating__label--half'
                        htmlFor='rating2-05'
                      >
                        <i className='rating__icon rating__icon--star ph-fill ph-star-half' />
                      </label>
                      <input className='rating__input' name='rating2' id='rating2-05' defaultValue='0.5' type='radio' />
                      <label aria-label='1 star' className='rating__label' htmlFor='rating2-10'>
                        <i className='rating__icon rating__icon--star ph-fill ph-star' />
                      </label>
                      <input className='rating__input' name='rating2' id='rating2-10' defaultValue={1} type='radio' />
                      <label
                        aria-label='1.5 stars'
                        className='rating__label rating__label--half'
                        htmlFor='rating2-15'
                      >
                        <i className='rating__icon rating__icon--star ph-fill ph-star-half' />
                      </label>
                      <input className='rating__input' name='rating2' id='rating2-15' defaultValue='1.5' type='radio' />
                      <label aria-label='2 stars' className='rating__label' htmlFor='rating2-20'>
                        <i className='rating__icon rating__icon--star ph-fill ph-star' />
                      </label>
                      <input className='rating__input' name='rating2' id='rating2-20' defaultValue={2} type='radio' />
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
                      <label aria-label='3 stars' className='rating__label' htmlFor='rating2-30'>
                        <i className='rating__icon rating__icon--star ph-fill ph-star' />
                      </label>
                      <input className='rating__input' name='rating2' id='rating2-30' defaultValue={3} type='radio' />
                      <label
                        aria-label='3.5 stars'
                        className='rating__label rating__label--half'
                        htmlFor='rating2-35'
                      >
                        <i className='rating__icon rating__icon--star ph-fill ph-star-half' />
                      </label>
                      <input className='rating__input' name='rating2' id='rating2-35' defaultValue='3.5' type='radio' />
                      <label aria-label='4 stars' className='rating__label' htmlFor='rating2-40'>
                        <i className='rating__icon rating__icon--star ph-fill ph-star' />
                      </label>
                      <input className='rating__input' name='rating2' id='rating2-40' defaultValue={4} type='radio' />
                      <label
                        aria-label='4.5 stars'
                        className='rating__label rating__label--half'
                        htmlFor='rating2-45'
                      >
                        <i className='rating__icon rating__icon--star ph-fill ph-star-half' />
                      </label>
                      <input className='rating__input' name='rating2' id='rating2-45' defaultValue='4.5' type='radio' />
                      <label aria-label='5 stars' className='rating__label' htmlFor='rating2-50'>
                        <i className='rating__icon rating__icon--star ph-fill ph-star' />
                      </label>
                      <input className='rating__input' name='rating2' id='rating2-50' defaultValue={5} type='radio' />
                    </div>
                  </div>
                </div>
                <div className='mb-24'>
                  <label htmlFor='desc' className='text-neutral-700 text-lg fw-medium mb-12'>
                    {bd.yourQuestion}
                  </label>
                  <textarea
                    id='desc'
                    className='common-input rounded-24'
                    placeholder={bd.questionPh}
                    defaultValue={""}
                  />
                </div>
                <div className='mb-0'>
                  <button type='submit' className='btn btn-main rounded-pill flex-center gap-8 mt-40'>
                    {bd.submitComments}
                    <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='border border-neutral-30 rounded-12 bg-main-25 p-32 bg-main-25'>
              <h4 className='mb-16'>{bd.sidebarSearch}</h4>
              <span className='d-block border border-neutral-30 my-24 border-dashed' />
              <form action='#' className='position-relative'>
                <input
                  type='text'
                  className='common-input rounded-pill py-18 pe-64'
                  placeholder={t("common.searchPlaceholder")}
                />
                <button
                  type='submit'
                  className='flex-center w-44 h-44 rounded-circle bg-main-600 hover-bg-main-700 text-white text-2xl position-absolute inset-inline-end-0 top-50 translate-middle-y me-8'
                >
                  <i className='ph ph-magnifying-glass' />
                </button>
              </form>
            </div>
            <div className='border border-neutral-30 rounded-12 bg-main-25 p-32 bg-main-25 mt-24'>
              <h4 className='mb-16'>{bd.moreRelated}</h4>
              <span className='d-block border border-neutral-30 my-24 border-dashed' />
              {bd.relatedPosts.map((post, i) => (
                <div key={post.title}>
                  <div className='flex-align gap-16'>
                    <Link href={localizePath('/blog')} className='flex-shrink-0'>
                      <img
                        src={`assets/images/thumbs/blog-two-img${(i % 5) + 1}.png`}
                        alt=''
                        className='w-80 h-80 rounded-8 object-fit-cover'
                      />
                    </Link>
                    <div className='flex-grow-1'>
                      <h6 className='text-xl mb-10'>
                        <Link href={localizePath('/blog')} className='hover-text-main-600 text-line-2'>
                          {post.title}
                        </Link>
                      </h6>
                      <span className='text-neutral-500'>{post.date}</span>
                    </div>
                  </div>
                  <span className='d-block border border-neutral-30 my-24 border-dashed' />
                </div>
              ))}
              <Link
                href={localizePath('/blog')}
                className='h6 mb-0 text-main-600 fw-semibold hover-text-decoration-underline'
              >
                {t("common.seeAll")}
                <i className='ph-bold ph-arrow-right' />
              </Link>
            </div>
            <div className='border border-neutral-30 rounded-12 bg-main-25 p-32 bg-main-25 mt-24'>
              <h4 className='mb-16'>{bd.popularTag}</h4>
              <span className='d-block border border-neutral-30 my-24 border-dashed' />
              <div className='flex-align flex-wrap gap-8'>
                {bd.tagList.map((tag) => (
                  <Link
                    key={tag}
                    href={localizePath('/blog')}
                    className='border border-neutral-30 px-20 py-12 rounded-pill text-sm bg-white text-neutral-500 hover-border-main-600 hover-text-main-600'
                  >
                    {tag}
                  </Link>
                ))}
              </div>
              <span className='d-block border border-neutral-30 my-24 border-dashed' />
              <Link
                href={localizePath('/blog')}
                className='h6 mb-0 text-main-600 fw-semibold hover-text-decoration-underline'
              >
                {t("common.seeAll")}
                <i className='ph-bold ph-arrow-right' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsInner;
