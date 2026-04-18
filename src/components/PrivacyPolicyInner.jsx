"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";

const PrivacyPolicyInner = () => {
  const { t, localizePath } = useLocale();
  return (
    <section className='privacy-policy py-120'>
      <div className='container'>
        <div className='row gy-4'>
          <div className='col-lg-8'>
            <div className='d-flex flex-column gap-40'>
              <div className=''>
                <h1 className='mb-16'>{t("privacyPage.collectTitle")}</h1>
                <p className='text-neutral-700'>{t("privacyPage.collectIntro")}</p>
              </div>
              <div className=''>
                <h3 className='mb-16'>{t("privacyPage.accountHeading")}</h3>
                <ul className='list-dotted d-flex flex-column gap-24'>
                  <li className='text-neutral-700'>{t("privacyPage.accountLi1")}</li>
                  <li className='text-neutral-700'>{t("privacyPage.accountLi2")}</li>
                </ul>
              </div>
              <div className=''>
                <h4 className='mb-16'>{t("privacyPage.enrollmentHeading")}</h4>
                <ul className='list-dotted d-flex flex-column gap-24'>
                  <li className='text-neutral-700'>{t("privacyPage.enrollmentLi1")}</li>
                  <li className='text-neutral-700'>{t("privacyPage.enrollmentLi2")}</li>
                </ul>
              </div>
              <div className=''>
                <h5 className='mb-16'>{t("privacyPage.communityHeading")}</h5>
                <ul className='list-dotted d-flex flex-column gap-24'>
                  <li className='text-neutral-700'>{t("privacyPage.communityLi1")}</li>
                </ul>
              </div>
              <div className=''>
                <h6 className='mb-16'>{t("privacyPage.paymentHeading")}</h6>
                <ul className='list-dotted d-flex flex-column gap-24'>
                  <li className='text-neutral-700'>{t("privacyPage.paymentLi1")}</li>
                  <li className='text-neutral-700'>{t("privacyPage.paymentLi2")}</li>
                </ul>
              </div>
            </div>
            <p className='text-neutral-700 mt-32'>{t("privacyPage.closingNote")}</p>
          </div>
          <div className='col-lg-4'>
            <div className='border border-neutral-30 rounded-12 bg-main-25 p-32 bg-main-25'>
              <h4 className='mb-16'>{t("privacyPage.morePolicy")}</h4>
              <span className='d-block border border-neutral-30 my-24 border-dashed' />
              {[
                t("privacyPage.personalization"),
                t("privacyPage.communication"),
                t("privacyPage.analytics"),
                t("privacyPage.sharingInfo"),
                t("privacyPage.serviceProvider"),
                t("privacyPage.security"),
              ].map((heading) => (
                <div key={heading}>
                  <div className='d-flex align-items-center justify-content-between gap-24'>
                    <div className='d-flex align-items-center gap-16'>
                      <span className='w-56 h-56 rounded-circle bg-white border border-neutral-30 d-flex justify-content-center align-items-center text-neutral-500 text-2xl'>
                        <i className='ph ph-file-text' />
                      </span>
                      <div>
                        <h6 className='text-xl mb-8 fw-medium'>{heading}</h6>
                        <span className='text-neutral-500 text-sm'>{t("privacyPage.downloadBlurb")}</span>
                      </div>
                    </div>
                    <button
                      type='button'
                      className='w-56 h-56 rounded-circle bg-white border border-neutral-30 d-flex justify-content-center align-items-center text-neutral-500 text-2xl hover-bg-main-600 hover-border-main-600 hover-text-white'
                    >
                      <i className='ph ph-download-simple' />
                    </button>
                  </div>
                  <span className='d-block border border-neutral-30 my-24 border-dashed' />
                </div>
              ))}
              <Link
                href={localizePath('/sign-in')}
                className='h6 mb-0 text-main-600 fw-semibold hover-text-decoration-underline'
              >
                {t("common.seeAll")}
                <i className='ph-bold ph-arrow-right' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyInner;
