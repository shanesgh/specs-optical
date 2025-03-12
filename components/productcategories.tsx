"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { ProductType, SingleProductBySlug } from "@/lib/types";
import Product from "./product";
import { cn, debounce } from "@/lib/utils";
import CustomPagination from "./paginationcustom";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchProductsBySearch } from "@/lib/actions";

// const categories: string[] = ["all", "sunglasses", "eyewear", "contacts"];
const categories: string[] = ["all"];

const sortOptions: string[] = [
  "Price: Low to High",
  "Price: High to Low",
  "Brand: A to Z",
  "Brand: Z to A",
];

type ProductCategoriesProps = {
  products: ProductType[];
};

const ProductCategories = ({ products }: ProductCategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [maxPrice, setMaxPrice] = useState<number>(5000);
  const [sliderValue, setSliderValue] = useState<number>(5000);
  const [sortOption, setSortOption] = useState<string>("Price: Low to High");
  const [searchResults, setSearchResults] = useState<SingleProductBySlug[]>([]);
  const [query, setQuery] = useState<string>("");

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryParam = searchParams.get("query");
    if (queryParam) {
      setQuery(queryParam);
      handleSearch(queryParam);
    }
  }, [searchParams]);

  const handleSearch = async (searchQuery: string) => {
    try {
      const results: SingleProductBySlug[] = await fetchProductsBySearch(
        `*${searchQuery}*`
      );
      setSearchResults(results);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const debouncedSetMaxPrice = useRef(
    debounce((val: number) => {
      setMaxPrice(val);
    }, 300)
  ).current;

  const sortedProducts = useMemo(() => {
    const sorted = [...products];
    switch (sortOption) {
      case "Price: High to Low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "Price: Low to High":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "Brand: A to Z":
        sorted.sort((a, b) => a.brand.localeCompare(b.brand));
        break;
      case "Brand: Z to A":
        sorted.sort((a, b) => b.brand.localeCompare(a.brand));
        break;
    }
    return sorted;
  }, [sortOption, products]);

  const filteredProducts = useMemo(() => {
    return sortedProducts.filter((product) => {
      const categoryMatch =
        selectedCategory === "all" ||
        product.categories.some(
          (category) =>
            category.name.toLowerCase() === selectedCategory.toLowerCase()
        );
      const priceMatch = product.price <= maxPrice;
      return categoryMatch && priceMatch;
    });
  }, [selectedCategory, maxPrice, sortedProducts]);

  const currentProducts = useMemo(() => {
    const offset = (currentPage - 1) * productsPerPage;
    return filteredProducts.slice(offset, offset + productsPerPage);
  }, [currentPage, filteredProducts]);

  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  const handleCategoryClick = (category: string) => {
    if (window.location.pathname !== "/products") {
      window.history.pushState({}, "", "/products");
      router.refresh();
    }
    setQuery("");
    setSelectedCategory(category);
    router.replace("/products");
  };
  return (
    <section className="min-h-[1200px] py-3">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-x-2">
          {/* Sidebar */}
          <div className="w-full lg:w-1/6 p-4 mb-8 xl:mb-0 xl:h-[84vh] order-1 lg:order-none">
            <div className="flex justify-between lg:space-x-4 mb-4">
              <RadioGroup
                defaultValue="all"
                className="flex flex-col lg:justify-between"
              >
                {categories.map((category) => (
                  <div key={category} className="flex items-center">
                    <RadioGroupItem
                      value={category}
                      id={category}
                      onClick={() => handleCategoryClick(category)}
                      className="hidden"
                    />
                    <label
                      htmlFor={category}
                      className={cn(
                        "cursor-pointer pb-1 border-b-2",
                        selectedCategory === category
                          ? "border-black"
                          : "border-transparent"
                      )}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </label>
                  </div>
                ))}
              </RadioGroup>

              <RadioGroup
                defaultValue="Price: Low to High"
                className="flex flex-col lg:justify-between mb-6 lg:ml-4 lg:hidden"
              >
                {sortOptions.map((option) => (
                  <div key={option} className="flex items-center">
                    <RadioGroupItem
                      value={option}
                      id={option}
                      onClick={() => setSortOption(option)}
                      className="hidden"
                    />
                    <label
                      htmlFor={option}
                      className={cn(
                        "cursor-pointer pb-1 border-b-2",
                        sortOption === option ||
                          (option === "Price: Low to High" &&
                            sortOption === "Price: Low to High")
                          ? "border-black"
                          : "border-transparent"
                      )}
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Price Slider */}
            <div className="w-full">
              <div className="mb-4 font-medium flex-col sm:flex-row sm:items-center">
                <div className="flex lg:flex-col lg:items-start lg:justify-center items-center justify-between w-full ">
                  <span className="text-accent font-semibold inline-block text-nowrap min-w-20 flex-1 ">
                    Max: ${sliderValue.toFixed(2)}
                  </span>
                  <span className="text-nowrap inline-block ml-2 sm:ml-4 lg:ml-0 mt-2 sm:mt-0 w-1/4 ">
                    {filteredProducts.length === 1 ? "Item" : "Items"}:{" "}
                    {filteredProducts.length}
                  </span>
                </div>
              </div>
              <Slider
                defaultValue={5000}
                max={10000}
                step={250}
                onChange={(val) => {
                  setSliderValue(val as number);
                  debouncedSetMaxPrice(val as number);
                }}
              />
            </div>
          </div>

          {/* Products */}
          <div className="lg:w-2/3 order-3 lg:order-2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {(query ? searchResults : currentProducts).map((product) => (
                <Product key={product.product_name} product={product} />
              ))}
            </div>
            <div>
              <CustomPagination
                pageCount={pageCount}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-1/6 p-4 xl:h-[84vh] order-2 lg:order-3 hidden lg:block">
            <RadioGroup
              defaultValue="Price: Low to High"
              className="flex flex-col justify-between mb-6"
            >
              {sortOptions.map((option) => (
                <div key={option} className="flex items-center">
                  <RadioGroupItem
                    value={option}
                    id={option}
                    onClick={() => setSortOption(option)}
                    className="hidden"
                  />
                  <label
                    htmlFor={option}
                    className={`cursor-pointer pb-1 border-b-2 ${
                      sortOption === option ||
                      (option === "Price: Low to High" &&
                        sortOption === "Price: Low to High")
                        ? "border-black"
                        : "border-transparent"
                    }`}
                  >
                    {option}
                  </label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
