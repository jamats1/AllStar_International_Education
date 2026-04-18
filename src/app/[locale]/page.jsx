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
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata({ params }) {
  const dict = getDictionary(params.locale);
  return {
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
  };
}

const page = () => {
  return (
    <>
      <HeaderOne />

      <Animation />

      <BannerOne />

      <BrandOne />

      <FeaturesOne />

      <ExploreCourseOne />

      <AboutOne />

      <InstructorOne />

      <ChooseUsOne />

      <CounterOne />

      <TestimonialsOne />

      <BlogOne />

      <CertificateOne />

      <FooterOne />
    </>
  );
};

export default page;
