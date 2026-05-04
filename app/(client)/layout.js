import Header from "@/components/client/common/Header";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
