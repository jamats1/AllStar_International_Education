"use client";

import { useLocale } from "@/context/LocaleContext";

const CheckoutInner = () => {
  const { t, formatMoney } = useLocale();
  return (
    <div className='py-120'>
      <div className='container'>
        <form action='#'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='border border-neutral-30 rounded-12 bg-main-25 p-32 bg-main-25'>
                <h4 className='mb-12'>{t("checkout.billingAddress")}</h4>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='text-neutral-500 text-md'>
                    {t("checkout.transactionId")}{" "}
                    <span className='text-neutral-700'>25246584</span>
                  </div>
                  <div className='text-neutral-500 text-md'>
                    {t("checkout.totalPayable")}{" "}
                    <span className='text-neutral-700'>{formatMoney(1115)}</span>
                  </div>
                </div>
                <span className='d-block border border-neutral-30 my-24 border-dashed' />
                <div className='row gy-4'>
                  <div className='col-sm-6 col-xs-6'>
                    <input
                      type='text'
                      className='common-input bg-white rounded-pill border-neutral-40 focus-border-main-600 placeholder-text-neutral-100'
                      placeholder={t("checkout.phName")}
                    />
                  </div>
                  <div className='col-sm-6 col-xs-6'>
                    <input
                      type='email'
                      className='common-input bg-white rounded-pill border-neutral-40 focus-border-main-600 placeholder-text-neutral-100'
                      placeholder={t("checkout.phEmail")}
                    />
                  </div>
                  <div className='col-sm-6 col-xs-6'>
                    <input
                      type='tel'
                      className='common-input bg-white rounded-pill border-neutral-40 focus-border-main-600 placeholder-text-neutral-100'
                      placeholder={t("checkout.phPhone")}
                    />
                  </div>
                  <div className='col-sm-6 col-xs-6'>
                    <select className='common-input form-select bg-white rounded-pill border-neutral-40 focus-border-main-600 placeholder-text-neutral-100'>
                      <option value=''>{t("checkout.countryUsa")}</option>
                      <option value=''>{t("checkout.countryUk")}</option>
                      <option value=''>{t("checkout.countryCanada")}</option>
                      <option value=''>{t("checkout.countryBangladesh")}</option>
                    </select>
                  </div>
                  <div className='col-sm-12'>
                    <textarea
                      className='common-input bg-white rounded-24 border-neutral-40 focus-border-main-600 placeholder-text-neutral-100'
                      placeholder={t("checkout.phAddress")}
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className='border border-neutral-30 rounded-12 bg-main-25 p-32 bg-main-25 mt-24'>
                <h4 className='mb-12'>{t("checkout.paymentMethods")}</h4>
                <div className='d-flex align-items-center gap-24 flex-wrap'>
                  <div className='form-check common-check common-radio mb-0'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='card'
                      id='creditCard'
                    />
                    <label
                      className='form-check-label fw-normal flex-grow-1'
                      htmlFor='creditCard'
                    >
                      {t("checkout.creditCard")}
                    </label>
                  </div>
                  <div className='form-check common-check common-radio mb-0'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='card'
                      id='Debitcard'
                    />
                    <label
                      className='form-check-label fw-normal flex-grow-1'
                      htmlFor='Debitcard'
                    >
                      {t("checkout.debitCard")}
                    </label>
                  </div>
                  <div className='form-check common-check common-radio mb-0'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='card'
                      id='PayPal'
                    />
                    <label
                      className='form-check-label fw-normal flex-grow-1'
                      htmlFor='PayPal'
                    >
                      {t("checkout.payPal")}
                    </label>
                  </div>
                </div>
                <span className='d-block border border-neutral-30 my-24 border-dashed' />
                <div className='row gy-4'>
                  <div className='col-sm-12'>
                    <label
                      htmlFor='cardNumber'
                      className='text-neutral-700 text-lg fw-medium mb-12'
                    >
                      {t("checkout.cardNumber")}
                    </label>
                    <input
                      type='text'
                      className='common-input bg-white rounded-pill border-neutral-40 focus-border-main-600 placeholder-text-neutral-100'
                      id='cardNumber'
                      placeholder={t("checkout.phCard")}
                    />
                  </div>
                  <div className='col-sm-6 col-xs-6'>
                    <label
                      htmlFor='Expirydate'
                      className='text-neutral-700 text-lg fw-medium mb-12'
                    >
                      {t("checkout.expiryDate")}
                    </label>
                    <input
                      type='date'
                      className='common-input bg-white rounded-pill border-neutral-40 focus-border-main-600 placeholder-text-neutral-100'
                      id='Expirydate'
                    />
                  </div>
                  <div className='col-sm-6 col-xs-6'>
                    <label
                      htmlFor='cvv'
                      className='text-neutral-700 text-lg fw-medium mb-12'
                    >
                      {t("checkout.cvc")}
                    </label>
                    <input
                      type='text'
                      className='common-input bg-white rounded-pill border-neutral-40 focus-border-main-600 placeholder-text-neutral-100'
                      id='cvv'
                      placeholder={t("checkout.phCvv")}
                    />
                  </div>
                  <div className='col-sm-12'>
                    <label
                      htmlFor='nameCard'
                      className='text-neutral-700 text-lg fw-medium mb-12'
                    >
                      {t("checkout.nameOnCard")}
                    </label>
                    <input
                      type='text'
                      className='common-input bg-white rounded-pill border-neutral-40 focus-border-main-600 placeholder-text-neutral-100'
                      id='nameCard'
                      placeholder={t("checkout.phCardName")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='border border-neutral-30 rounded-12 bg-main-25 p-24 bg-main-25'>
                <span className='text-neutral-700 text-lg mb-12'>{t("orderSummary.price")}</span>
                <div className='flex-align align-items-start flex-wrap gap-8'>
                  <div className='flex-align gap-12 text-neutral-700'>
                    <span className='text-2xl d-flex'>
                      <i className='ph-bold ph-tag' />
                    </span>
                    <span className=''>{t("orderSummary.from")}</span>
                    <h2 className='mb-0'>{formatMoney(99.99)}</h2>
                  </div>
                  <button
                    type='button'
                    className='text-neutral-500 text-sm'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    data-bs-title={t("orderSummary.initialPriceTooltip")}
                  >
                    <i className='ph-bold ph-info' />
                  </button>
                </div>
                <span className='d-block border border-neutral-30 my-24 border-dashed' />
                <div className='d-flex flex-column gap-24'>
                  <div className='d-flex align-items-center justify-content-between gap-4'>
                    <span className='text-neutral-500'>{t("orderSummary.basePrice")}</span>
                    <span className='text-neutral-700 fw-medium'>{formatMoney(39.99)}</span>
                  </div>
                  <div className='d-flex align-items-center justify-content-between gap-4'>
                    <span className='text-neutral-500'>{t("orderSummary.stateTax")}</span>
                    <span className='text-neutral-700 fw-medium'>{formatMoney(5)}</span>
                  </div>
                  <div className='d-flex align-items-center justify-content-between gap-4'>
                    <span className='text-neutral-500'>{t("orderSummary.shipping")}</span>
                    <span className='text-neutral-700 fw-medium'>{t("orderSummary.free")}</span>
                  </div>
                </div>
                <span className='d-block border border-neutral-30 my-24 border-dashed' />
                <div className='my-24 position-relative'>
                  <input
                    type='email'
                    className='form-control bg-white shadow-none border border-neutral-30 rounded-pill h-48 ps-24 pe-44 focus-border-main-600'
                    placeholder={t("cart.discountPlaceholder")}
                  />
                  <button
                    type='submit'
                    className='w-36 h-36 flex-center rounded-circle bg-main-600 text-white hover-bg-main-800 position-absolute top-50 translate-middle-y inset-inline-end-0 me-8'
                  >
                    <i className='ph ph-arrow-right' />
                  </button>
                </div>
                <div className='d-flex align-items-center justify-content-between gap-4'>
                  <span className='text-neutral-500'>{t("orderSummary.discount")}</span>
                  <span className='text-main-two-600 fw-medium'>{formatMoney(-9)}</span>
                </div>
                <span className='d-block border border-neutral-30 my-24 border-dashed' />
                <div className='d-flex align-items-center justify-content-between gap-4'>
                  <span className='text-neutral-500'>{t("orderSummary.total")}</span>
                  <span className='text-main-600 fw-medium'>{formatMoney(35.99)}</span>
                </div>
                <span className='d-block border border-neutral-30 mt-24 border-dashed' />
                <button
                  type='submit'
                  className='btn btn-main rounded-pill w-100 mt-40'
                >
                  {t("orderSummary.checkout")}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutInner;
