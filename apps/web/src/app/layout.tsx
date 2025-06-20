import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-brand-light">
      <body>{children}</body>
    </html>
  );
}
