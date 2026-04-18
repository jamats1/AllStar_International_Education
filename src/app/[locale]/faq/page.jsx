import BrandTwo from "@/components/BrandTwo";
import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import FAQInnerOne from "@/components/FAQInnerOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import TestimonialsThree from "@/components/TestimonialsThree";
import Animation from "@/helper/Animation";
import { createPageMetadata } from "@/i18n/page-metadata";

export const generateMetadata = createPageMetadata("faq");

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb titleKey='faq' />

      {/* FAQInnerOne */}
      <FAQInnerOne />

      {/* TestimonialsThree */}
      <TestimonialsThree />

      {/* BrandTwo */}
      <BrandTwo />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
