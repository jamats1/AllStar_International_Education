import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import TuitionJobs from "@/components/TuitionJobs";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Tuition Jobs",
  description:
    "Explore tutoring and teaching opportunities at AllStar International Education. Join our team of educators and make an impact.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Tuition Jobs"} />

      {/* TuitionJobs */}
      <TuitionJobs />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
