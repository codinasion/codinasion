export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      Navbar
      <main>{children}</main>
      Footer
    </>
  );
}
