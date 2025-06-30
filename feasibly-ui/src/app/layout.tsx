import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AssessmentProvider } from "@/context/AssessmentContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feasibly - Business Feasibility Analysis",
  description: "Analyze the feasibility of your business idea in German cities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AssessmentProvider>
          {children}
        </AssessmentProvider>
      </body>
    </html>
  );
}
