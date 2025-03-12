"use client";
import { useToast } from "@/hooks/use-toast";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import cn from "classnames";

type AddToCartBtnProps = {
  btnStyles: string;
  icon?: React.ReactNode;
  id: string;
  currency: string;
  name: string;
  description: string;
  images: string[];
  price: number;
};

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({
  id,
  currency,
  name,
  description,
  images,
  price,
  btnStyles,
}) => {
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
      className={cn(
        "bg-blue-950 rounded-lg px-2 py-1 text-white ring-1 ring-black focus:ring-black",
        btnStyles
      )}
      onClick={() => {
        addItem(glasses);
        toast({
          title: `${name} - added to the wishlist`,
          duration: 2000,
        });
      }}
    >
      <div>Add to Wishlist</div>
    </button>
  );
};

export default AddToCartBtn;
