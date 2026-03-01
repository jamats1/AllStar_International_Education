import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import ProductsInner from "@/components/ProductsInner";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Products",
  description:
    "Browse learning materials, books, and resources from AllStar International Education. Support your studies with quality products.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Products"} />

      {/* ProductsInner */}
      <ProductsInner />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
