import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

export const metadata = {
  title: "Devpoint - Web Development & Digital Marketing Solutions",
  description:
    "Devpoint offers top-tier web development and digital marketing services, including SEO, social media marketing, PPC, and custom website solutions.",
  keywords: [
    "Web Development",
    "Digital Marketing",
    "SEO",
    "Social Media Marketing",
    "PPC",
    "Custom Websites",
    "Business Growth",
    "Affordable Web Solutions",
  ],
  author: "Devpoint",
  icons: "/favicon.ico",
  openGraph: {
    title: "Devpoint - Web Development & Digital Marketing",
    description:
      "Devpoint specializes in creating high-quality websites and effective digital marketing strategies to help businesses grow online.",
    url: "https://devpoint.in",
    siteName: "Devpoint",
    type: "website",
    images: [
      {
        url: "/devpoint-logo-removebg.png", 
        width: 1200,
        height: 630,
        alt: "Devpoint - Web Development & Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devpoint - Web Development & Digital Marketing",
    description:
      "Providing cost-effective web development and digital marketing services for businesses to thrive online.",
    site: "@your_twitter_handle",
    creator: "@your_twitter_handle",
    images: ["/devpoint-logo-removebg.png"], 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Devpoint" />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
      </head>
      <body>
        <Loader>
        <div className="fixed top-0 z-50">
          <Navbar />
        </div>
        {children}
        <Footer />
        <Toaster />
        </Loader>
      </body>
    </html>
  );
}
