import { Footer } from "./_components/footer";
import { Header } from "./_components/header";

export default function MarketingLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
