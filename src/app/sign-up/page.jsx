import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import SignUpInner from "@/components/SignUpInner";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Sign Up",
  description:
    "Create your AllStar International Education account. Register to book courses, save favorites, and manage your learning journey.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Sign Up"} />

      {/* SignUpInner */}
      <SignUpInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
