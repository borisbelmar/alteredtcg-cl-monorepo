import type { Metadata } from "next";
import localFont from "next/font/local";
import "@repo/ui/globals.css";
import './icons.css'
import { GoogleTagManager } from "@next/third-parties/google";

const workSans = localFont({
  src: [
    {
      path: "../../../assets/fonts/work-sans-v19-latin-regular.woff2",
      weight: "400",
    },
    {
      path: "../../../assets/fonts/work-sans-v19-latin-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../assets/fonts/work-sans-v19-latin-300.woff2",
      weight: "300"
    },
    {
      path: "../../../assets/fonts/work-sans-v19-latin-300italic.woff2",
      weight: "300",
      style: "italic"
    },
    {
      path: "../../../assets/fonts/work-sans-v19-latin-700.woff2",
      weight: "700"
    },
    {
      path: "../../../assets/fonts/work-sans-v19-latin-700italic.woff2",
      weight: "700",
      style: "italic"
    }
  ],
  variable: "--font-work-sans",
})

export const metadata: Metadata = {
  title: "Precios Referenciales | Altered TCG Chile",
  description: "Lista de precios referenciales de cartas de Altered TCG en Chile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <GoogleTagManager gtmId="GTM-PH85H7PH" />
      <body className={`${workSans.variable} font-sans dark`}>
        {children}
      </body>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PH85H7PH"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </html>
  );
}
