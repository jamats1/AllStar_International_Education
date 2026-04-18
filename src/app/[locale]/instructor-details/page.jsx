import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import CourseAllOne from "@/components/CourseAllOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import InstructorDetails from "@/components/InstructorDetails";
import TestimonialsTwo from "@/components/TestimonialsTwo";
import Animation from "@/helper/Animation";
import { createPageMetadata } from "@/i18n/page-metadata";

export const generateMetadata = createPageMetadata("instructorDetails");

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb titleKey='instructorDetails' />

      {/* InstructorDetails */}
      <InstructorDetails />

      {/* CourseAllOne */}
      <CourseAllOne />

      {/* TestimonialsTwo */}
      <TestimonialsTwo />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
