"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Search, X } from "lucide-react";
import { CgShoppingBag } from "react-icons/cg";
import { useShoppingCart } from "use-shopping-cart";
import CartSideBar from "./cartsidebar";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { fetchProductsBySearch } from "@/lib/actions";
import { SingleProductBySlug } from "@/lib/types";

const SearchPanel = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { cartCount, handleCartClick } = useShoppingCart();
  const router = useRouter();
  const inputRef = useRef<HTMLDivElement>(null);

  const handleSearch = async () => {
    if (query.trim()) {
      const results: SingleProductBySlug[] = await fetchProductsBySearch(
        `*${query}*`
      );
      console.log(results);
      router.push(`/products?query=${query}`);
    }
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
        setQuery("");
      }
    },
    [inputRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="flex items-center justify-between xl:w-1/2 lg:w-3/4 px-2  ">
      <div
        className={cn(
          "w-full relative transition-all ease-in-out duration-300",
          {
            "xl:w-3/4": !isFocused,
            "lg:w-3/4": !isFocused,
            "lg:w-full": isFocused,
          }
        )}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          className="cursor-pointer w-full px-2 pl-4 pr-12 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-950/80"
        />
        <div className="absolute top-0 right-0 flex items-center h-full pr-4">
          {query ? (
            <X
              className="w-5 h-5 text-gray-500 cursor-pointer"
              onClick={() => setQuery("")}
            />
          ) : (
            <Search
              onClick={handleSearch}
              className="size-4 text-gray-500 cursor-pointer"
            />
          )}
        </div>
      </div>
      <div
        onClick={() => handleCartClick()}
        className="relative cursor-pointer pr-1 pl-1"
      >
        <CgShoppingBag className="text-[26px]" />
        <div
          className={cn(
            " size-4 bg-red-600 absolute -right-1 -bottom-1 rounded-full text-white flex font-bold items-center justify-center text-[12px] ",
            {
              "size-5 -right-2 -bottom-2": (cartCount as number) > 9,
              "size-6 -right-3 -bottom-3": (cartCount as number) > 99,
            }
          )}
        >
          {cartCount}
        </div>
      </div>

      <CartSideBar />
    </div>
  );
};

export default SearchPanel;
