import BootstrapInit from "@/helper/BootstrapInit";
import RouteScrollToTop from "@/helper/RouteScrollToTop";
import LoadPhosphorIcons from "@/helper/LoadPhosphorIcons";

import "./font.css";
import "./globals.scss";

export const metadata = {
  title: "AllStar International Education - LMS, Tutors, Education & Online Courses",
  description:
    "AllStar International Education is a comprehensive platform for online education, learning management systems (LMS), tutors, educational institutions, and online courses. We provide an engaging and interactive online learning experience for students, educators, and institutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <BootstrapInit />
        <LoadPhosphorIcons />

        <RouteScrollToTop />
        {children}
      </body>
    </html>
  );
}
