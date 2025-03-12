import { Header } from "@/components/header";
import CartProvider from "@/components/cartprovider";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";
import { ModalProvider } from "@/hooks/use-modal";
import { ModalRenderer } from "@/components/modalrenderer";
import { Providers } from "../providers";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <ModalProvider>
        <CartProvider>
          <Providers>
            <Header />
            <main className="p-6 bg-white/80">
              {children} <Toaster />
            </main>
            <Footer />
          </Providers>
        </CartProvider>
        <ModalRenderer />
      </ModalProvider>
    </>
  );
};

export default DashboardLayout;
