import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import LessonDetails from "@/components/LessonDetails";
import Animation from "@/helper/Animation";
import { createPageMetadata } from "@/i18n/page-metadata";

export const generateMetadata = createPageMetadata("lessonDetails");

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb titleKey='lessonDetails' />

      {/* LessonDetails */}
      <LessonDetails />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
