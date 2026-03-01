import AboutOne from "@/components/AboutOne";
import BannerOne from "@/components/BannerOne";
import BlogOne from "@/components/BlogOne";
import BrandOne from "@/components/BrandOne";
import CertificateOne from "@/components/CertificateOne";
import ChooseUsOne from "@/components/ChooseUsOne";
import CounterOne from "@/components/CounterOne";
import ExploreCourseOne from "@/components/ExploreCourseOne";
import FeaturesOne from "@/components/FeaturesOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import InstructorOne from "@/components/InstructorOne";
import TestimonialsOne from "@/components/TestimonialsOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "AllStar International Education - LMS, Tutors, Education & Online Courses",
  description:
    "AllStar International Education is a comprehensive platform for online education, learning management systems (LMS), tutors, educational institutions, and online courses. We provide an engaging and interactive online learning experience for students, educators, and institutions.",
};

const page = () => {
  return (
    <>
      {/* HeaderOne */}
      <HeaderOne />

      {/* Animation */}
      <Animation />

      {/* BannerOne */}
      <BannerOne />

      {/* BrandOne */}
      <BrandOne />

      {/* FeaturesOne */}
      <FeaturesOne />

      {/* ExploreCourseOne */}
      <ExploreCourseOne />

      {/* AboutOne */}
      <AboutOne />

      {/* InstructorOne */}
      <InstructorOne />

      {/* CHooseUsOne */}
      <ChooseUsOne />

      {/* CounterOne */}
      <CounterOne />

      {/* TestimonialsOne */}
      <TestimonialsOne />

      {/* BlogOne */}
      <BlogOne />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
