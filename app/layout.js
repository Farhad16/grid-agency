import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export const metadata = {
  title: "Grid Communications",
  description:
    "Independent creative agency empowering businesses to embrace the unconventional.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-R5KWMMJ0Y1"
        strategy="lazyOnload"
      ></Script>
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            window.dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-R5KWMMJ0Y1', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <body>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
