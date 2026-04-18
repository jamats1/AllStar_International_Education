"use client";

import { useLocale } from "@/context/LocaleContext";

const BookOnlineClassInner = () => {
  const { t } = useLocale();
  return (
    <section className='py-120'>
      <div className='container'>
        <div className='border border-neutral-30 rounded-12 bg-main-25 p-24 bg-main-25'>
          <form action='#'>
            <h3 className='mb-24'>{t("bookClassForm.title")}</h3>
            <div className='border border-neutral-30 rounded-12 bg-white p-24'>
              <h5 className='mb-0'>{t("bookClassForm.fillInfo")}</h5>
              <span className='d-block border border-main-50 my-24 border-dashed' />
              <div className='row gy-4'>
                <div className='col-sm-6'>
                  <label
                    htmlFor='name'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    {t("bookClassForm.name")} <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <input
                    type='text'
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600'
                    id='name'
                    placeholder={t("bookClassForm.namePh")}
                  />
                </div>
                <div className='col-sm-6'>
                  <label
                    htmlFor='email'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    {t("bookClassForm.email")} <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <input
                    type='email'
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600'
                    id='email'
                    placeholder={t("bookClassForm.emailPh")}
                  />
                </div>
                <div className='col-sm-6'>
                  <label
                    htmlFor='Phone'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    {t("bookClassForm.mobile")} <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <input
                    type='tel'
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600'
                    id='Phone'
                    placeholder={t("bookClassForm.mobilePh")}
                  />
                </div>
                <div className='col-sm-6'>
                  <label
                    htmlFor='selectClass'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    {t("bookClassForm.selectClass")}
                    <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <select
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600 form-select py-14'
                    id='selectClass'
                    defaultValue=''
                  >
                    <option value='' hidden>
                      {t("bookClassForm.classPh")}
                    </option>
                    <option value=''>{t("bookClassForm.onlineClass")}</option>
                    <option value=''>{t("bookClassForm.offlineClass")}</option>
                  </select>
                </div>
                <div className='col-sm-12'>
                  <label
                    htmlFor='selectCountry'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    {t("bookClassForm.selectCountry")} <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <select
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600 form-select py-14'
                    id='selectCountry'
                    defaultValue=''
                  >
                    <option value='' hidden>
                      {t("bookClassForm.countryPh")}
                    </option>
                    <option value=''>{t("checkout.countryBangladesh")}</option>
                    <option value=''>{t("findTutorsForm.countryPakistan")}</option>
                    <option value=''>{t("findTutorsForm.countryBhutan")}</option>
                    <option value=''>{t("findTutorsForm.countryNepal")}</option>
                    <option value=''>{t("findTutorsForm.countryAustralia")}</option>
                    <option value=''>{t("findTutorsForm.countryEngland")}</option>
                  </select>
                </div>
                <div className='col-sm-12'>
                  <button
                    type='submit'
                    className='btn btn-main rounded-pill flex-center gap-8 mt-16'
                  >
                    {t("bookClassForm.submit")}
                    <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookOnlineClassInner;
