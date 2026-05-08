import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sharad Moorti Arts | Divine Marble Studio",
  description: "Exquisite hand-carved Makrana marble idols and temple installations by Sharad Moorti Arts.",
  authors: [{ name: "Sharad Moorti Arts" }],
  openGraph: {
    title: "Sharad Moorti Arts | Divine Marble Studio",
    description: "Exquisite hand-carved Makrana marble idols and temple installations.",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharad Moorti Arts | Divine Marble Studio",
    description: "Exquisite hand-carved Makrana marble idols and temple installations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-background text-foreground`} suppressHydrationWarning>
        <TooltipProvider>
          {children}
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}
