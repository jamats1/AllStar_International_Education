"use client";
import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/context/LocaleContext";

const SignInInner = () => {
  const { t, localizePath } = useLocale();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className='account py-120 position-relative'>
      <div className='container'>
        <div className='row gy-4 align-items-center'>
          <div className='col-lg-6'>
            <div className='bg-main-25 border border-neutral-30 rounded-8 p-32'>
              <div className='mb-40'>
                <h3 className='mb-16 text-neutral-500'>{t("auth.welcomeBack")}</h3>
                <p className='text-neutral-500'>{t("auth.signInLead")}</p>
              </div>
              <form action='#'>
                <div className='mb-24'>
                  <label
                    htmlFor='email'
                    className='fw-medium text-lg text-neutral-500 mb-16'
                  >
                    {t("auth.emailLabel")}
                  </label>
                  <input
                    type='email'
                    className='common-input rounded-pill'
                    id='email'
                    placeholder={t("auth.emailPh")}
                  />
                </div>
                <div className='mb-16'>
                  <label
                    htmlFor='password'
                    className='fw-medium text-lg text-neutral-500 mb-16'
                  >
                    {t("auth.passwordLabel")}
                  </label>
                  <div className='position-relative'>
                    <input
                      type={passwordVisible ? "text" : "password"}
                      className='common-input rounded-pill pe-44'
                      id='password'
                      placeholder={t("auth.passwordPh")}
                    />
                    <span
                      className={`toggle-password position-absolute top-50 inset-inline-end-0 me-16 translate-middle-y ph-bold ${
                        passwordVisible ? "ph-eye" : "ph-eye-closed"
                      }`}
                      onClick={togglePasswordVisibility}
                    ></span>
                  </div>
                </div>
                <div className='mb-16 text-end'>
                  <button
                    type='button'
                    className='border-0 bg-transparent p-0 text-warning-600 hover-text-decoration-underline'
                  >
                    {t("auth.forgot")}
                  </button>
                </div>
                <div className='mb-16'>
                  <p className='text-neutral-500'>
                    {t("auth.noAccount")}
                    <Link
                      href={localizePath("/sign-up")}
                      className='fw-semibold text-main-600 hover-text-decoration-underline'
                    >
                      {t("auth.signUpLink")}
                    </Link>
                  </p>
                </div>
                <div className='mt-40'>
                  <button
                    type='submit'
                    className='btn btn-main rounded-pill flex-center gap-8 mt-40'
                  >
                    {t("auth.signInBtn")}
                    <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='col-lg-6 d-lg-block d-none'>
            <div className='account-img'>
              <img src='assets/images/thumbs/account-img.png' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInInner;
