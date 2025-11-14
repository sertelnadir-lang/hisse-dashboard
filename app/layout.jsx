export const metadata = {
  title: "Hisse Dashboard",
  description: "Portföy takip uygulaması"
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
