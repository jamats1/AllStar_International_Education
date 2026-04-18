import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import SignUpInner from "@/components/SignUpInner";
import Animation from "@/helper/Animation";
import { createPageMetadata } from "@/i18n/page-metadata";

export const generateMetadata = createPageMetadata("signUp");

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb titleKey='signUp' />

      {/* SignUpInner */}
      <SignUpInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
