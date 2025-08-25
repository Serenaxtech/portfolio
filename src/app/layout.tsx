import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Serena - Portfolio | UI/UX Designer & Developer",
  description: "Serena's portfolio showcasing creative UI/UX design and development projects. A designer who judges a book by its cover.",
  keywords: ["UI/UX Designer", "Portfolio", "Web Design", "Frontend Developer", "Creative Designer"],
  authors: [{ name: "Serena" }],
  openGraph: {
    title: "Serena - Portfolio | UI/UX Designer & Developer",
    description: "Creative UI/UX designer and developer portfolio showcasing innovative design solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Preahvihear:wght@400&family=Handlee:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
