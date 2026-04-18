import AboutOne from "@/components/AboutOne";
import BrandTwo from "@/components/BrandTwo";
import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import ChooseUsOne from "@/components/ChooseUsOne";
import CounterOne from "@/components/CounterOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import InstructorOne from "@/components/InstructorOne";
import TestimonialsOne from "@/components/TestimonialsOne";
import Animation from "@/helper/Animation";
import { createPageMetadata } from "@/i18n/page-metadata";

export const generateMetadata = createPageMetadata("about");

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb titleKey='about' />

      {/* AboutOne */}
      <AboutOne />

      {/* InstructorOne */}
      <InstructorOne />

      {/* ChooseUsOne */}
      <ChooseUsOne />

      {/* CounterOne */}
      <CounterOne />

      {/* TestimonialsOne */}
      <TestimonialsOne />

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
