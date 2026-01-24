
export default function ShopLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div className="bg-red-500 min-h-screen">
      <h1>Hello Root Layout Shop</h1>
      {children}
    </div>
  );
}