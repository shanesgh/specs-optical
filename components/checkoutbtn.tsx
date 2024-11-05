//to fix error - emil

"use client";

import { useShoppingCart } from "use-shopping-cart";
import { useFormStatus } from "react-dom";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
//to change provider
import { sendReceiptEmail } from "@/lib/actions";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

type CheckoutBtnPROPS = {
  ids: number;
  handleCartClick: () => void;
};

const CheckoutBtn: React.FC<CheckoutBtnPROPS> = ({ ids, handleCartClick }) => {
  const router = useRouter();
  const { pending } = useFormStatus();
  const { clearCart } = useShoppingCart();
  const { toast } = useToast(); // Use the use-toast hook

  const handleCheckout = async () => {
    return;
    try {
      const orderNumber = "12345";
      const items = [{ name: "Nike Shoes", price: 100 }];
      const total = 100;
      const email = "shane.marchan.tt@gmail.com";

      // Send email via server action
      const result = { success: true, error: "error" };

      if (result.success) {
        toast({
          title: "Success",
          description: "Order sent, thank you! We'll reach out within 24 hours",
        });
        router.push("/products");
        handleCartClick();
      } else {
        console.log("Error sending email:", result.error);
        toast({
          title: "Error",
          description: "Error sending email, please try again",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "An error occurred, please try again",
      });
    }
  };

  return (
    <button
      type="submit"
      className="flex 
        justify-center 
        px-4
        py-2
        shadow-[4px_4px_0px_0px_rgba(0,0,0)] 
        text-md 
        font-semibold 
        focus-visible:outline 
        focus-visible:outline-2 
        focus-visible:outline-offset-2 
        active:translate-y-2
        transition-all
        linear
        rounded-2xl
        duration-100
        text-white bg-blue-950 hover:animate-pulse hover:scale-105  ease-in focus-visible:outline-black hover:outline-black"
      onClick={handleCheckout}
    >
      Email to Specs {pending && <Loader className="animate-spin h-4 w-4" />}
    </button>
  );
};

export default CheckoutBtn;
