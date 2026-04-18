import BootstrapInit from "@/helper/BootstrapInit";
import RouteScrollToTop from "@/helper/RouteScrollToTop";
import LoadPhosphorIcons from "@/helper/LoadPhosphorIcons";

import "./font.css";
import "./globals.scss";

const siteName = "全明星国际教育";
const baseDescription =
  "全明星国际教育提供在线课程、资深导师、留学规划与申请辅导，助力学生与机构实现升学与奖学金目标。";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.allstarinternationaleducation.com"),
  title: {
    default: `${siteName} – 在线教育 · 留学与奖学金辅导`,
    template: `%s | ${siteName}`,
  },
  description: baseDescription,
  keywords: [
    "国际教育",
    "在线课程",
    "留学",
    "导师",
    "CSC",
    "奖学金",
    "签证",
    "雅思",
    "托福",
    "HSK",
  ],
  authors: [{ name: siteName }],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName,
    title: `${siteName} – 在线教育 · 留学与奖学金辅导`,
    description: baseDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} – 在线教育 · 留学与奖学金辅导`,
    description: baseDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='zh-Hans'>
      <body suppressHydrationWarning={true}>
        <BootstrapInit />
        <LoadPhosphorIcons />

        <RouteScrollToTop />
        {children}
      </body>
    </html>
  );
}
