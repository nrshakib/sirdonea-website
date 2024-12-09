import { Poppins } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/shared/Topbar";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "teasforacause",
  description: "Website for teasforacause",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="hidden lg:block">
          <Topbar />
        </div>
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        <div className="-z-20 overflow-hidden">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
