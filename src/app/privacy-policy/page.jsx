import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import PrivacyPolicyInner from "@/components/PrivacyPolicyInner";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Read our privacy policy. How AllStar International Education collects, uses, and protects your personal information.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Privacy Policy"} />

      {/* PrivacyPolicyInner */}
      <PrivacyPolicyInner />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
