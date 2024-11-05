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

const CartSidebar = () => {
  const {
    cartCount,
    cartDetails,
    shouldDisplayCart,
    totalPrice,
    handleCartClick,
  } = useShoppingCart();

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="flex flex-col h-full">
        <SheetHeader>
          <SheetTitle className="text-left mb-12">
            My Shopping Cart({cartCount})
          </SheetTitle>
        </SheetHeader>
        <div className="flex-grow overflow-y-auto">
          {cartCount === 0 ? (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h5 className="text-black/50">Your cart is empty</h5>
            </div>
          ) : (
            <ScrollArea className="pr-4 mb-4">
              {cartDetails &&
                Object.entries(cartDetails).map(([key, item]) => {
                  return <CartItem item={item} key={key} />;
                })}
            </ScrollArea>
          )}
        </div>
        {(cartCount as number) > 0 ? (
          <div className="mt-auto p-4 bg-white">
            <div className="flex justify-between font-semibold">
              <div className="uppercase mb-5">Total</div>
              <div>${totalPrice}</div>
            </div>
            <CheckoutBtn
              ids={cartCount as number}
              handleCartClick={handleCartClick}
            />
          </div>
        ) : null}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
