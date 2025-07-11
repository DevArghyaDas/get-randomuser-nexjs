import HerouiProvider from "@/components/HerouiProvider";
import "./globals.css";
import { RootLayoutPropType } from "@/lib/types";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ToastComp from "@/components/ToastComp";

const RootLayout = ({ children }: RootLayoutPropType) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <body>
        <HerouiProvider>
          <Header />
          <main className="max-w-5xl mx-auto pt-6 pb-20">{children}</main>
          <Footer />
          <ToastComp />
        </HerouiProvider>
      </body>
    </html>
  );
};

export default RootLayout;
