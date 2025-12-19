import { Navbar } from "@/components";

export default function GeneralLayout({ children }: { children: React.ReactNode; }) {
  return (
    <>
      <Navbar />
      <main>
        <h1>Hello Root Layout Root Name</h1>
        {children}
      </main>
    </>
  );
}