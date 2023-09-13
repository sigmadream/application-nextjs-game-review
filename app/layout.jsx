export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>[Header]</header>
        <main>{children}</main>
        <footer>[footer]</footer>
      </body>
    </html>
  );
}
