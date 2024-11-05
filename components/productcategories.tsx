"use client";
import { useState, useRef, useMemo } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { ProductType } from "@/lib/types";
import Product from "./product";
import { cn, debounce } from "@/lib/utils";
import CustomPagination from "./paginationcustom";

const categories: string[] = ["all", "sunglasses", "eyewear", "contacts"];

const sortOptions: string[] = [
  "Price: High to Low",
  "Price: Low to High",
  "Brand: A to Z",
  "Brand: Z to A",
];

type ProductCategoriesProps = {
  products: ProductType[];
};

const ProductCategories = ({ products }: ProductCategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [maxPrice, setMaxPrice] = useState<number>(2000);
  const [sliderValue, setSliderValue] = useState<number>(2000);
  const [sortOption, setSortOption] = useState<string>("Price: High to Low");

  // pagination
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
    let sorted = [...products];
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

  return (
    <section className="min-h-[1200px] py-3">
      <div className="container mx-auto">
        <div className="flex w-full justify-between flex-col xl:flex-row space-x-2">
          {/* Sidebar */}
          <div className="w-full xl:w-1/6 p-4 mb-8 xl:mb-0 xl:h-[84vh] order-1 xl:order-1">
            <RadioGroup
              defaultValue="all"
              className="flex lg:flex-col flex-row justify-between mb-10"
            >
              {categories.map((category) => (
                <div key={category} className="flex items-center">
                  <RadioGroupItem
                    value={category}
                    id={category}
                    onClick={() => setSelectedCategory(category)}
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
            {/* Price Slider */}
            <div className="w-full">
              <div className="mb-4 font-medium flex flex-col sm:flex-row sm:items-center">
                <div className="flex items-center w-full">
                  <span className="text-accent font-semibold inline-block text-nowrap min-w-20 flex-1">
                    Price: ${sliderValue.toFixed(2)}
                  </span>
                  <span className="text-nowrap inline-block ml-2 sm:ml-4 mt-2 sm:mt-0 w-1/4">
                    {filteredProducts.length}{" "}
                    {filteredProducts.length === 1 ? "item" : "items"}
                  </span>
                </div>
              </div>

              <Slider
                defaultValue={2000}
                max={5000}
                step={100}
                onChange={(val) => {
                  setSliderValue(val as number);
                  debouncedSetMaxPrice(val);
                }}
              />
            </div>
          </div>
          {/* Right Sidebar */}
          <div className="w-full xl:w-1/6 p-4 xl:h-[84vh] order-2 xl:order-3">
            <RadioGroup
              defaultValue="Price: High to Low"
              className="flex lg:flex-col flex-row justify-between mb-6"
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
                      sortOption === option
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
          {/* Products */}
          <div className="xl:w-2/3 order-3 xl:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {currentProducts.map((product) => (
                <Product key={product.product_name} product={product} />
              ))}
            </div>
            <div className="">
              <CustomPagination
                pageCount={pageCount}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
