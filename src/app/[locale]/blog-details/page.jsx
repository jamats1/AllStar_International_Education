import BlogDetailsInner from "@/components/BlogDetailsInner";
import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Animation from "@/helper/Animation";
import { createPageMetadata } from "@/i18n/page-metadata";

export const generateMetadata = createPageMetadata("blogDetails");

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb titleKey='blogDetails' />

      {/* BlogDetailsInner */}
      <BlogDetailsInner />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
