"use client";

import { useState, useMemo } from "react";

// Country → provinces (alphabetical) → cities per province (alphabetical). China first for default.
const LOCATION_DATA = {
  CN: [
    { name: "Anhui", cities: ["Hefei", "Wuhu"] },
    { name: "Beijing", cities: ["Beijing"] },
    { name: "Guangdong", cities: ["Dongguan", "Guangzhou", "Shenzhen"] },
    { name: "Jiangsu", cities: ["Nanjing", "Suzhou", "Wuxi"] },
    { name: "Shanghai", cities: ["Shanghai"] },
    { name: "Zhejiang", cities: ["Hangzhou", "Ningbo"] },
  ],
  BD: [
    { name: "Chittagong", cities: ["Chittagong"] },
    { name: "Dhaka", cities: ["Dhaka", "Gazipur"] },
    { name: "Rajshahi", cities: ["Rajshahi"] },
    { name: "Sylhet", cities: ["Sylhet"] },
  ],
  IN: [
    { name: "Karnataka", cities: ["Bangalore", "Mysore"] },
    { name: "Maharashtra", cities: ["Mumbai", "Pune"] },
    { name: "Tamil Nadu", cities: ["Chennai", "Coimbatore"] },
  ],
  PK: [
    { name: "Punjab", cities: ["Lahore", "Rawalpindi"] },
    { name: "Sindh", cities: ["Karachi"] },
  ],
  US: [
    { name: "California", cities: ["Los Angeles", "San Francisco"] },
    { name: "Texas", cities: ["Dallas", "Houston"] },
  ],
  GB: [
    { name: "England", cities: ["London", "Manchester"] },
    { name: "Scotland", cities: ["Edinburgh", "Glasgow"] },
  ],
  AU: [
    { name: "New South Wales", cities: ["Sydney"] },
    { name: "Victoria", cities: ["Melbourne"] },
  ],
  CA: [
    { name: "Ontario", cities: ["Toronto"] },
    { name: "Quebec", cities: ["Montreal"] },
  ],
  OTHER: [{ name: "Other", cities: ["Other"] }],
};

const COUNTRY_OPTIONS = [
  { code: "CN", name: "China" },
  { code: "BD", name: "Bangladesh" },
  { code: "IN", name: "India" },
  { code: "PK", name: "Pakistan" },
  { code: "NP", name: "Nepal" },
  { code: "BT", name: "Bhutan" },
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "AU", name: "Australia" },
  { code: "CA", name: "Canada" },
  { code: "NG", name: "Nigeria" },
  { code: "KE", name: "Kenya" },
  { code: "ZA", name: "South Africa" },
  { code: "EG", name: "Egypt" },
  { code: "ID", name: "Indonesia" },
  { code: "MY", name: "Malaysia" },
  { code: "SG", name: "Singapore" },
  { code: "JP", name: "Japan" },
  { code: "KR", name: "South Korea" },
  { code: "FR", name: "France" },
  { code: "DE", name: "Germany" },
  { code: "OTHER", name: "Other" },
];

function getDefaultProvince(countryCode) {
  const provinces = LOCATION_DATA[countryCode] || LOCATION_DATA.OTHER;
  return provinces[0]?.name ?? "Other";
}

function getDefaultCity(countryCode, provinceName) {
  const provinces = LOCATION_DATA[countryCode] || LOCATION_DATA.OTHER;
  const province = provinces.find((p) => p.name === provinceName);
  const cities = province?.cities ?? ["Other"];
  return cities[0] ?? "Other";
}

const ApplyForAdmission = () => {
  const [country, setCountry] = useState("CN");
  const [province, setProvince] = useState(() => getDefaultProvince("CN"));
  const [city, setCity] = useState(() => getDefaultCity("CN", getDefaultProvince("CN")));

  const provinces = useMemo(() => LOCATION_DATA[country] || LOCATION_DATA.OTHER, [country]);
  const cities = useMemo(() => {
    const p = provinces.find((pr) => pr.name === province);
    return p ? [...p.cities] : [];
  }, [country, province, provinces]);

  const handleCountryChange = (e) => {
    const newCountry = e.target.value;
    setCountry(newCountry);
    const firstProvince = getDefaultProvince(newCountry);
    setProvince(firstProvince);
    setCity(getDefaultCity(newCountry, firstProvince));
  };

  const handleProvinceChange = (e) => {
    const newProvince = e.target.value;
    setProvince(newProvince);
    setCity(getDefaultCity(country, newProvince));
  };

  const handleCityChange = (e) => setCity(e.target.value);

  return (
    <section className='py-120'>
      <div className='container'>
        <div className='border border-neutral-30 rounded-12 bg-main-25 p-24 bg-main-25'>
          <form action='#'>
            <h3 className='mb-24'>Apply for Admission</h3>
            {/* Personal information Start */}
            <div className='border border-neutral-30 rounded-12 bg-white p-24'>
              <h5 className='mb-0'>Personal information</h5>
              <span className='d-block border border-main-50 my-24 border-dashed' />
              <div className='row gy-4'>
                <div className='col-sm-6'>
                  <label
                    htmlFor='name'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    Student Name <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <input
                    type='text'
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600'
                    id='name'
                    placeholder='Enter Your Name...'
                  />
                </div>
                <div className='col-sm-6'>
                  <label
                    htmlFor='email'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    Email <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <input
                    type='email'
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600'
                    id='email'
                    placeholder='Enter Your Email...'
                  />
                </div>
                <div className='col-sm-12'>
                  <label
                    htmlFor='Phone'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    Phone <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <input
                    type='tel'
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600'
                    id='Phone'
                    placeholder='Enter Your Number...'
                  />
                </div>
                <div className='col-sm-12'>
                  <label className='text-neutral-700 text-lg fw-medium mb-12'>
                    Gender <span className='text-danger-600'>*</span>{" "}
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
                        Male
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
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6'>
                  <label
                    htmlFor='dateBirth'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    Date of birth
                    <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <input
                    type='date'
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600'
                    id='dateBirth'
                  />
                </div>
                <div className='col-sm-6'>
                  <label
                    htmlFor='selectCountry'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    Select Country <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <select
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600 form-select py-14'
                    id='selectCountry'
                    value={country}
                    onChange={handleCountryChange}
                  >
                    {COUNTRY_OPTIONS.map(({ code, name }) => (
                      <option key={code} value={code}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='col-sm-6'>
                  <label
                    htmlFor='selectState'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    Province
                    <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <select
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600 form-select py-14'
                    id='selectState'
                    value={province}
                    onChange={handleProvinceChange}
                  >
                    {provinces.map((p) => (
                      <option key={p.name} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='col-sm-6'>
                  <label
                    htmlFor='selectCity'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    Select city
                    <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <select
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600 form-select py-14'
                    id='selectCity'
                    value={city}
                    onChange={handleCityChange}
                  >
                    {cities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='col-sm-12'>
                  <label
                    htmlFor='zipCode'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    Zip code <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <input
                    type='text'
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600'
                    id='zipCode'
                    placeholder='Enter code...'
                  />
                </div>
                <div className='col-sm-12'>
                  <label
                    htmlFor='address'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    Your address
                  </label>
                  <textarea
                    className='common-input bg-main-25 rounded-24 border-transparent focus-border-main-600'
                    id='address'
                    placeholder='Enter Your address...'
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            {/* Personal information End */}
            {/* Parent detail Start */}
            <div className='border border-neutral-30 rounded-12 bg-white p-24 mt-24'>
              <h5 className='mb-0'> Parent details </h5>
              <span className='d-block border border-main-50 my-24 border-dashed' />
              <div className='row gy-4'>
                <div className='col-sm-12'>
                  <label className='text-neutral-700 text-lg fw-medium mb-12'>
                    Gender <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <div className='flex-align gap-24'>
                    <div className='form-check common-check common-radio mb-0'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='gender'
                        id='Mr'
                      />
                      <label
                        className='form-check-label fw-normal flex-grow-1'
                        htmlFor='Mr'
                      >
                        Mr.
                      </label>
                    </div>
                    <div className='form-check common-check common-radio mb-0'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='gender'
                        id='Mrs'
                      />
                      <label
                        className='form-check-label fw-normal flex-grow-1'
                        htmlFor='Mrs'
                      >
                        Mrs.
                      </label>
                    </div>
                    <div className='form-check common-check common-radio mb-0'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='gender'
                        id='Ms'
                      />
                      <label
                        className='form-check-label fw-normal flex-grow-1'
                        htmlFor='Ms'
                      >
                        Ms.
                      </label>
                    </div>
                    <div className='form-check common-check common-radio mb-0'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='gender'
                        id='Dr'
                      />
                      <label
                        className='form-check-label fw-normal flex-grow-1'
                        htmlFor='Dr'
                      >
                        Dr.
                      </label>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6'>
                  <label
                    htmlFor='fullname'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    Full Name <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <input
                    type='text'
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600'
                    id='fullname'
                    placeholder='Enter Your Name...'
                  />
                </div>
                <div className='col-sm-6'>
                  <label
                    htmlFor='relation'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    Relation with applicant{" "}
                    <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <input
                    type='text'
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600'
                    id='relation'
                    placeholder='Enter relation'
                  />
                </div>
                <div className='col-sm-12'>
                  <label
                    htmlFor='PhoneParent'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    Phone <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <input
                    type='tel'
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600'
                    id='PhoneParent'
                    placeholder='Enter Your Number...'
                  />
                </div>
                <div className='col-sm-6'>
                  <label
                    htmlFor='emailParent'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    Email <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <input
                    type='email'
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600'
                    id='emailParent'
                    placeholder='Enter Your Email...'
                  />
                </div>
                <div className='col-sm-6'>
                  <label
                    htmlFor='jobTitle'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    Job Title <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <input
                    type='text'
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600'
                    id='jobTitle'
                    placeholder='Job title'
                  />
                </div>
                <div className='col-sm-12'>
                  <label
                    htmlFor='addressParent'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    Home address
                  </label>
                  <textarea
                    className='common-input bg-main-25 rounded-24 border-transparent focus-border-main-600'
                    id='addressParent'
                    placeholder='Enter Your address...'
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            {/* Parent detail End */}
            {/* Education Start */}
            <div className='border border-neutral-30 rounded-12 bg-white p-24 mt-24'>
              <h5 className='mb-0'>Education</h5>
              <span className='d-block border border-main-50 my-24 border-dashed' />
              <div className='row gy-4'>
                <div className='col-sm-6'>
                  <label
                    htmlFor='ssName'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    School or college name{" "}
                    <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <input
                    type='text'
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600'
                    id='ssName'
                    placeholder='Enter Name...'
                  />
                </div>
                <div className='col-sm-6'>
                  <label
                    htmlFor='passYear'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    Year of passing
                    <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <input
                    type='text'
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600'
                    id='passYear'
                    placeholder='Enter year'
                  />
                </div>
                <div className='col-sm-6'>
                  <label
                    htmlFor='boardUniversity'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    Board of university{" "}
                    <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <input
                    type='text'
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600'
                    id='boardUniversity'
                    placeholder='Enter board...'
                  />
                </div>
                <div className='col-sm-6'>
                  <label
                    htmlFor='classGrad'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    Class grad <span className='text-danger-600'>*</span>{" "}
                  </label>
                  <select
                    className='common-input bg-main-25 rounded-pill border-transparent focus-border-main-600 form-select py-14'
                    id='classGrad'
                  >
                    <option value=''>1st Class</option>
                    <option value=''>2nd Class</option>
                    <option value=''>3rd Class</option>
                  </select>
                </div>
                <div className='col-sm-12'>
                  <label
                    htmlFor='addressEducation'
                    className='text-neutral-700 text-lg fw-medium mb-12'
                  >
                    School or college address
                  </label>
                  <textarea
                    className='common-input bg-main-25 rounded-24 border-transparent focus-border-main-600'
                    id='addressEducation'
                    placeholder='Enter address...'
                    defaultValue={""}
                  />
                </div>
                <div className='col-sm-12'>
                  <button
                    type='submit'
                    className='btn btn-main rounded-pill flex-center gap-8 mt-16'
                  >
                    Submit Now
                    <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                  </button>
                </div>
              </div>
            </div>
            {/* Education End */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplyForAdmission;
