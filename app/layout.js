import "./globals.css";

export const metadata = {
  title: "healingHub Clinic",
  description: "Govandi | Mumbai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
