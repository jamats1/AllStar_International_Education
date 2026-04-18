import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import SignInInner from "@/components/SignInInner";
import Animation from "@/helper/Animation";
import { createPageMetadata } from "@/i18n/page-metadata";

export const generateMetadata = createPageMetadata("signIn");

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb titleKey='signIn' />

      {/* SignInInner */}
      <SignInInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
