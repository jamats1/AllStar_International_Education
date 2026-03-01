import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import TutorDetails from "@/components/TutorDetails";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Tutor Profile",
  description:
    "View tutor profile, subjects, availability, and reviews. Book a session with qualified tutors at AllStar International Education.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Tutors Details"} />

      {/* TutorDetails */}
      <TutorDetails />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
