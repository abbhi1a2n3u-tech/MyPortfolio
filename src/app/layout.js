import "./globals.css";

export const metadata = {
  title: "Shivam's Portfolio",
  description: "Next.js App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
