"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Search, X } from "lucide-react";
import { CgShoppingBag } from "react-icons/cg";
import { useShoppingCart } from "use-shopping-cart";
import CartSideBar from "./cartsidebar";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ProductType } from "@/lib/types";
import { fetchProducts } from "@/lib/actions";

const SearchPanel = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isEmptyResults, setIsEmptyResults] = useState(false);
  const { cartCount, handleCartClick } = useShoppingCart();
  const router = useRouter();
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const allProducts = await fetchProducts();
        setProducts(allProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchAllProducts();
  }, []);

  const findMatch = (query: string, products: ProductType[]) => {
    let length = query.length;
    while (length > 0) {
      const filteredProducts = products.filter((product: ProductType) =>
        product.brand
          .toLowerCase()
          .startsWith(query.toLowerCase().substring(0, length))
      );
      if (filteredProducts.length > 0) {
        return filteredProducts;
      }
      length -= 1;
    }
    return [];
  };

  const handleSearch = () => {
    if (!query.trim()) return;
    const filteredProducts = findMatch(query, products);
    if (filteredProducts.length === 0) {
      setIsEmptyResults(true);
      setQuery("");
      setTimeout(() => {
        setIsEmptyResults(false);
      }, 3000);
    } else {
      setIsEmptyResults(false);
      router.push(`/products?query=${filteredProducts[0].brand.toLowerCase()}`);
      if (window.innerWidth < 1024) {
        setTimeout(() => {
          window.scrollBy({ top: 260, behavior: "smooth" });
        }, 1050);
      }
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
    <div className="flex items-center justify-between  xl:w-1/2 lg:w-3/4 px-2 w-4/5 sm:w-3/5">
      <div
        ref={inputRef}
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
          placeholder={isEmptyResults ? "No results..." : "Search..."}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          className={cn(
            "cursor-pointer w-full px-2 pl-4 pr-12 py-2 border rounded-full focus:outline-none",
            {
              "border-red-500 focus:ring-red-500": isEmptyResults,
              "border-gray-300 focus:ring-blue-950/80": !isEmptyResults,
            }
          )}
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
              className="w-5 h-5 text-gray-500 cursor-pointer"
            />
          )}
        </div>
      </div>
      <div
        onClick={() => handleCartClick()}
        className="relative cursor-pointer pr-1 pl-1"
      >
        <CgShoppingBag className="text-[26px] text-white sm:text-blue-950" />
        <div
          className={cn(
            "size-4 bg-red-500 absolute -right-1 -bottom-1 rounded-full text-white flex font-bold items-center justify-center text-[12px]",
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

// "use client";

// import { useState, useRef, useEffect, useCallback } from "react";
// import { Search, X } from "lucide-react";
// import { CgShoppingBag } from "react-icons/cg";
// import { useShoppingCart } from "use-shopping-cart";
// import CartSideBar from "./cartsidebar";
// import { cn } from "@/lib/utils";
// import { useRouter } from "next/navigation";
// import { ProductType } from "@/lib/types";
// import { fetchProducts } from "@/lib/actions";

// const SearchPanel = () => {
//   const [query, setQuery] = useState("");
//   const [products, setProducts] = useState<ProductType[]>([]);
//   const [isFocused, setIsFocused] = useState(false);
//   const [isEmptyResults, setIsEmptyResults] = useState(false);
//   const { cartCount, handleCartClick } = useShoppingCart();
//   const router = useRouter();
//   const inputRef = useRef<HTMLDivElement>(null);

//   //works - !no dup if sendn same query - conv and co.

//   useEffect(() => {
//     const fetchAllProducts = async () => {
//       try {
//         const allProducts = await fetchProducts();
//         setProducts(allProducts);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     };
//     fetchAllProducts();
//   }, []);

//   const findMatch = (query: string, products: ProductType[]) => {
//     let length = query.length;
//     while (length > 0) {
//       const filteredProducts = products.filter((product: ProductType) =>
//         product.brand
//           .toLowerCase()
//           .startsWith(query.toLowerCase().substring(0, length))
//       );
//       if (filteredProducts.length > 0) {
//         return filteredProducts;
//       }
//       length -= 1;
//     }
//     return [];
//   };

//   const handleSearch = () => {
//     if (!query.trim()) return;
//     const filteredProducts = findMatch(query, products);
//     if (filteredProducts.length === 0) {
//       setIsEmptyResults(true);
//       setQuery("");
//       setTimeout(() => {
//         setIsEmptyResults(false);
//       }, 3000);
//     } else {
//       setIsEmptyResults(false);
//       router.push(`/products?query=${filteredProducts[0].brand.toLowerCase()}`);
//     }
//   };

//   const handleClickOutside = useCallback(
//     (event: MouseEvent) => {
//       if (
//         inputRef.current &&
//         !inputRef.current.contains(event.target as Node)
//       ) {
//         setIsFocused(false);
//         setQuery("");
//       }
//     },
//     [inputRef]
//   );

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [handleClickOutside]);

//   return (
//     <div className="flex items-center justify-between  xl:w-1/2 lg:w-3/4 px-2 w-4/5 sm:w-3/5">
//       <div
//         ref={inputRef}
//         className={cn(
//           "w-full relative transition-all ease-in-out duration-300",
//           {
//             "xl:w-3/4": !isFocused,
//             "lg:w-3/4": !isFocused,
//             "lg:w-full": isFocused,
//           }
//         )}
//       >
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//           placeholder={isEmptyResults ? "No results..." : "Search..."}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               handleSearch();
//             }
//           }}
//           className={cn(
//             "cursor-pointer w-full px-2 pl-4 pr-12 py-2 border rounded-full focus:outline-none",
//             {
//               "border-red-500 focus:ring-red-500": isEmptyResults,
//               "border-gray-300 focus:ring-blue-950/80": !isEmptyResults,
//             }
//           )}
//         />
//         <div className="absolute top-0 right-0 flex items-center h-full pr-4">
//           {query ? (
//             <X
//               className="w-5 h-5 text-gray-500 cursor-pointer"
//               onClick={() => setQuery("")}
//             />
//           ) : (
//             <Search
//               onClick={handleSearch}
//               className="w-5 h-5 text-gray-500 cursor-pointer"
//             />
//           )}
//         </div>
//       </div>
//       <div
//         onClick={() => handleCartClick()}
//         className="relative cursor-pointer pr-1 pl-1"
//       >
//         <CgShoppingBag className="text-[26px] text-white sm:text-blue-950" />
//         <div
//           className={cn(
//             "size-4 bg-red-500 absolute -right-1 -bottom-1 rounded-full text-white flex font-bold items-center justify-center text-[12px]",
//             {
//               "size-5 -right-2 -bottom-2": (cartCount as number) > 9,
//               "size-6 -right-3 -bottom-3": (cartCount as number) > 99,
//             }
//           )}
//         >
//           {cartCount}
//         </div>
//       </div>

//       <CartSideBar />
//     </div>
//   );
// };

// export default SearchPanel;
