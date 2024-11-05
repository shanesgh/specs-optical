"use client";
import { useToast } from "@/hooks/use-toast";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";

type AddToCartBtnProps = {
  btnStyles?: string;
  icon?: React.ReactNode;
  id: string;
  currency: string;
  name: string;
  description: string;
  images: string[];
  price: number;
};

const AddToCartBtn = ({
  id,
  currency,
  name,
  description,
  images,
  price,
}: AddToCartBtnProps) => {
  const { addItem } = useShoppingCart();
  const { toast } = useToast();

  const glasses = {
    id: id,
    currency: currency,
    name: name,
    description: description,
    images: images,
    price: price,
  };

  return (
    <button
      className="bg-blue-950 rounded-lg px-2 py-1 text-white ring-1 ring-black focus:ring-black"
      onClick={() => {
        addItem(glasses);
        toast({
          title: `${name} has been added to the cart`,
          duration: 2000,
        });
      }}
    >
      <div>Add to Cart</div>
    </button>
  );
};

export default AddToCartBtn;
