
export default function AuthLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div className="bg-blue-500 min-h-screen" >
      <h1>Hello Root Layout Auth</h1>
      {children}
    </div>
  );
}