"use client";

import { useLocale } from "@/context/LocaleContext";

const FindBestTutorsInner = () => {
  const { t } = useLocale();
  return (
    <section className='py-120'>
      <div className='container'>
        <div className='border border-neutral-30 rounded-12 bg-main-25 p-24 bg-main-25'>
          <form action='#'>
            <h3 className='mb-24'>{t("findTutorsForm.title")}</h3>
            <div className='border border-neutral-30 rounded-12 bg-white p-24'>
              <h5 className='mb-0'>{t("findTutorsForm.fillInfo")}</h5>
              <span className='d-block border border-main-50 my-24 border-dashed' />
              <div className='row gy-4'>
                <div className='col-sm-6'>
                  <label
                    htmlFor='location'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    {t("findTutorsForm.location")}{" "}
                  </label>
                  <input
                    type='text'
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600'
                    id='location'
                    placeholder={t("findTutorsForm.locationPh")}
                  />
                </div>
                <div className='col-sm-6'>
                  <label
                    htmlFor='selectLanguage'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    {t("findTutorsForm.selectLanguage")}{" "}
                    <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <select
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600 form-select py-14'
                    id='selectLanguage'
                    defaultValue=''
                  >
                    <option value='' hidden>
                      {t("findTutorsForm.languagePh")}
                    </option>
                    <option value=''>{t("findTutorsForm.langBangla")}</option>
                    <option value=''>{t("findTutorsForm.langUrdu")}</option>
                    <option value=''>{t("findTutorsForm.langEnglish")}</option>
                    <option value=''>{t("findTutorsForm.langSpanish")}</option>
                  </select>
                </div>
                <div className='col-sm-12'>
                  <label className='text-neutral-700 text-lg fw-medium mb-12'>
                    {t("findTutorsForm.gender")} <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <div className='flex-align gap-24'>
                    <div className='form-check common-check common-radio mb-0'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='gender'
                        id='Male'
                      />
                      <label
                        className='form-check-label fw-normal flex-grow-1'
                        htmlFor='Male'
                      >
                        {t("findTutorsForm.male")}
                      </label>
                    </div>
                    <div className='form-check common-check common-radio mb-0'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='gender'
                        id='Female'
                      />
                      <label
                        className='form-check-label fw-normal flex-grow-1'
                        htmlFor='Female'
                      >
                        {t("findTutorsForm.female")}
                      </label>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6'>
                  <label
                    htmlFor='selectDep'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    {t("findTutorsForm.selectDepartment")}{" "}
                    <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <select
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600 form-select py-14'
                    id='selectDep'
                    defaultValue=''
                  >
                    <option value='' hidden>
                      {t("findTutorsForm.departmentPh")}
                    </option>
                    <option value=''>{t("findTutorsForm.deptArts")}</option>
                    <option value=''>{t("findTutorsForm.deptScience")}</option>
                    <option value=''>{t("findTutorsForm.deptCommerce")}</option>
                  </select>
                </div>
                <div className='col-sm-6'>
                  <label
                    htmlFor='selectSub'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    {t("findTutorsForm.selectSubject")}{" "}
                    <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <select
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600 form-select py-14'
                    id='selectSub'
                    defaultValue=''
                  >
                    <option value='' hidden>
                      {t("findTutorsForm.subjectPh")}
                    </option>
                    <option value=''>{t("findTutorsForm.subEnglish")}</option>
                    <option value=''>{t("findTutorsForm.subBangla")}</option>
                    <option value=''>{t("findTutorsForm.subSocial")}</option>
                    <option value=''>{t("findTutorsForm.subEconomics")}</option>
                    <option value=''>{t("findTutorsForm.subMath")}</option>
                  </select>
                </div>
                <div className='col-sm-6'>
                  <label
                    htmlFor='selectCountry'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    {t("findTutorsForm.selectCountry")}{" "}
                    <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <select
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600 form-select py-14'
                    id='selectCountry'
                    defaultValue=''
                  >
                    <option value='' hidden>
                      {t("findTutorsForm.countryPh")}
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
                    {t("findTutorsForm.submit")}
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

export default FindBestTutorsInner;
