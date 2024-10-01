import type { Metadata } from "next";

const siteMetadata: Metadata = {
    title: "Oswaldo J. Sotto ©",
    description: "Frontend Developer - Portfolio",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://www.oswaldo-sotto.xyz/",
      siteName: "Oswaldo J. Sotto ©",
      images: [
        {
          url: "/big-logo.png", 
          height: 630,
          alt: "Your Image Description",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@your_twitter_handle",
      title: "Oswaldo J. Sotto ©",
      description: "Frontend Developer - Portfolio",
      images: [
        {
          url: "/big-logo.png", 
          alt: "Frontend Developer - Portfolio",
        },
      ],
    },
  };
  
  export default siteMetadata;