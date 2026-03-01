import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import TutorSectionOne from "@/components/TutorSectionOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Find a Tutor",
  description:
    "Find expert tutors for academic subjects, languages, and test prep. Book one-to-one or group sessions with AllStar International Education.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Premium Tutors"} />

      {/* TutorSectionOne */}
      <TutorSectionOne />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
