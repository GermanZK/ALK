import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALK — product catalog",
  description: "Base scaffold for the ALK project in Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <header className="site-header">
            <div className="container">
              <Link className="logo" href="/">
                ALK
              </Link>
              <nav className="nav">
                <Link href="/">Home</Link>
                <Link href="/catalog">Catalog</Link>
              </nav>
            </div>
          </header>
          <main className="main-content">
            <div className="container">{children}</div>
          </main>
          <footer className="site-footer">
            <div className="container">© {new Date().getFullYear()} ALK</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
