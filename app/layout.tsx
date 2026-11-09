import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Poras | Computer Science Engineering & Cybersecurity Researcher",
  description:
    "Official portfolio of Poras, second-year Computer Science Engineering student at BKBIET Pilani (CGPA 8.01/10) and aspiring cybersecurity researcher. Focus areas: Network Security, Linux Systems, Secure Software Development.",
  keywords: [
    "Poras",
    "Cybersecurity Researcher",
    "BKBIET Pilani",
    "Computer Science Engineering",
    "Network Security",
    "Linux Systems",
    "C++ Developer",
    "Student Portfolio",
  ],
  authors: [{ name: "Poras", url: "https://github.com/poras-2" }],
  creator: "Poras",
  openGraph: {
    title: "Poras | Computer Science & Cybersecurity Portfolio",
    description:
      "Second-year CSE student at BKBIET Pilani passionate about cybersecurity research, Linux systems, and secure software development.",
    url: "https://poras-2.github.io",
    siteName: "Poras Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1020",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-[#0B1020] text-[#F8FAFC] antialiased selection:bg-blue-500/30 selection:text-cyan-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
