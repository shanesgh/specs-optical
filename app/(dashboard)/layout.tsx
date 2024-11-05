import { Header } from "@/components/header";
import CartProvider from "@/components/cartprovider";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <CartProvider>
        <Header />
        <main className="p-6 bg-white/80">
          {children} <Toaster />
        </main>
        <Footer />

      </CartProvider>
    </>
  );
};

export default DashboardLayout;
