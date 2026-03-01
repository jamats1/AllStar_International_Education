import BootstrapInit from "@/helper/BootstrapInit";
import RouteScrollToTop from "@/helper/RouteScrollToTop";
import LoadPhosphorIcons from "@/helper/LoadPhosphorIcons";

import "./font.css";
import "./globals.scss";

const siteName = "AllStar International Education";
const baseDescription =
  "AllStar International Education offers online courses, expert tutors, study abroad guidance, and learning support for students and institutions worldwide.";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.allstarinternationaleducation.com"),
  title: {
    default: `${siteName} – Online Education, Tutors & Study Abroad`,
    template: `%s | ${siteName}`,
  },
  description: baseDescription,
  keywords: [
    "international education",
    "online courses",
    "study abroad",
    "tutors",
    "LMS",
    "learning management",
    "education consultancy",
    "scholarships",
    "visa guidance",
    "IELTS",
    "TOEFL",
  ],
  authors: [{ name: siteName }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    title: `${siteName} – Online Education, Tutors & Study Abroad`,
    description: baseDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} – Online Education, Tutors & Study Abroad`,
    description: baseDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
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
