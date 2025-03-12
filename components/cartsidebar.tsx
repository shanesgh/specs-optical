"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import { ScrollArea } from "./ui/scroll-area";
import CheckoutBtn from "./checkoutbtn";
import CartItem from "./cartitem";
import { z } from "zod";
import { useState, useTransition } from "react";
import { sendEmailAction } from "@/lib/actions";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(25, "Name can only be 25 characters long"),
  phone: z
    .string()
    .regex(
      /^\d{3}-?\d{4}$/,
      "Please enter a valid local phone number. ex 123-1234 or 1231234"
    ),
});

type FormSchemaType = z.infer<typeof formSchema>;

const CartSidebar = () => {
  const {
    cartCount,
    cartDetails,
    shouldDisplayCart,
    totalPrice,
    handleCartClick,
    clearCart,
  } = useShoppingCart();
  const [isSending] = useTransition();
  const [formData, setFormData] = useState<FormSchemaType>({
    name: "",
    phone: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormSchemaType, string>>
  >({});
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validatedData = formSchema.parse(formData);

      if (!cartDetails) {
        setStatus("Wishlist details are missing.");
        return;
      }

      const items = Object.entries(cartDetails).map(([, item]) => {
        const { name, id, images } = item;
        return { name, id, images };
      });

      const result = await sendEmailAction({
        to: "shane.marchan.tt@gmail.com",
        subject: `Customer Inquiry | Name ${validatedData.name} - Phone Number: ${validatedData.phone}`,
        text: `Products (${items.length}): ${JSON.stringify(items, null, 2)}`,
      });

      if (result.success) {
        setStatus("Email sent successfully!");
        clearCart();
        handleCartClick();
      } else {
        setStatus(result.error || "Failed to send email.");
      }

      setFormData({ name: "", phone: "" });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof FormSchemaType, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof FormSchemaType] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="flex flex-col h-full">
        <SheetHeader>
          <SheetTitle className="text-left mb-2">
            My WishList ({cartCount})
          </SheetTitle>
        </SheetHeader>
        <div className="flex-grow overflow-y-auto">
          {cartCount === 0 ? (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h5 className="text-black/50">Your wishlist is empty</h5>
            </div>
          ) : (
            <ScrollArea className="pr-4 mb-4">
              {cartDetails &&
                Object.entries(cartDetails).map(([key, item]) => (
                  <CartItem item={item} key={key} />
                ))}
            </ScrollArea>
          )}
        </div>
        {(cartCount as number) > 0 && (
          <>
            <div className="flex justify-between font-semibold">
              <div className="uppercase mt-auto">Total</div>
              <div>${totalPrice}</div>
            </div>
            <form
              onSubmit={handleCheckout}
              className="mt-auto p-2 space-y-2 bg-white flex flex-col"
            >
              <div className="flex flex-col">
                <input
                  id="name"
                  name="name"
                  placeholder="Name: "
                  value={formData.name}
                  onChange={handleChange}
                  className="p-1 pl-2 border border-blue-950 rounded-xl text-blue-950"
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>
              <div className="flex flex-col">
                <input
                  id="phone"
                  name="phone"
                  placeholder="Phone Number:"
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-1 pl-2 border border-blue-950 rounded-xl text-blue-950"
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </div>
              <div className="flex items-center mt-1">
                <CheckoutBtn onClick={handleCheckout} disabled={isSending} />
              </div>
              {status && <p className="text-green-500 mt-2">{status}</p>}
            </form>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
