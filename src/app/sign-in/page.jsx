import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import SignInInner from "@/components/SignInInner";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "AllStar International Education - LMS, Tutors, Education & Online Courses",
  description:
    "AllStar International Education is a comprehensive platform for online education, learning management systems (LMS), tutors, educational institutions, and online courses. We provide an engaging and interactive online learning experience for students, educators, and institutions.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Sign In"} />

      {/* SignInInner */}
      <SignInInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
