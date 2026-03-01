import ApplyForAdmission from "@/components/ApplyForAdmission";
import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Apply for Admission",
  description:
    "Apply for admission to programs and courses at AllStar International Education. Step-by-step guidance for applications and requirements.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Apply for Admission"} />

      {/* ApplyForAdmission */}
      <ApplyForAdmission />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
