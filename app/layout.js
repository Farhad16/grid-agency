import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export const metadata = {
  title: "Grid Communications",
  description:
    "Independent creative agency empowering businesses to embrace the unconventional.",
  images: [
    {
      url: "/assets/images/intro/og.png",
      width: 1800,
      height: 1600,
      alt: "My custom alt",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content={metadata.images[0].url} />
        <meta property="og:image:width" content={metadata.images[0].width} />
        <meta property="og:image:height" content={metadata.images[0].height} />
        <meta property="og:image:alt" content={metadata.images[0].alt} />
      </Head>
      <body>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
