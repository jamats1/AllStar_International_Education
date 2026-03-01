import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import ProductsDetailsInner from "@/components/ProductsDetailsInner";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Product Details",
  description:
    "View product details, pricing, and availability. Find learning materials and resources at AllStar International Education.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Products Details"} />

      {/* ProductsDetailsInner */}
      <ProductsDetailsInner />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
