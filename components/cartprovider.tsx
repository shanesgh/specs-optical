"use client";

import { ReactNode } from "react";
import { CartProvider as CProvider } from "use-shopping-cart";

type Props = {
  children: ReactNode;
};

const CartProvider = ({ children }: Props) => {
  return (
    <CProvider
      mode="payment"
      cartMode="client-only"
      stripe=""
      successUrl="success"
      cancelUrl="error"
      language="en-US"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={false}
    >
      {children}
    </CProvider>
  );
};

export default CartProvider;
