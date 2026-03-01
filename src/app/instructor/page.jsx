import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import InstructorAll from "@/components/InstructorAll";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Our Instructors",
  description:
    "Meet our qualified instructors and tutors at AllStar International Education. Experienced educators ready to support your academic and language goals.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Instructors"} />

      {/* InstructorAll */}
      <InstructorAll />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
