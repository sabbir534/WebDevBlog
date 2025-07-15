import NavBar from "@/components/layout/NavBar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '700']
});


export const metadata: Metadata = {
  title: "WebDevBlog",
  description: "A blog about web development",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn('antialiased flex flex-col min-h-screen px-2', poppins.variable)}
      >
        <ThemeProvider attribute='class' defaultTheme="system" enableSystem disableTransitionOnChange>
          <NavBar />
          <main className="flex-grow">
            {children}
          </main>
          <footer>Footer</footer>
        </ThemeProvider>

      </body>
    </html >
  );
}
