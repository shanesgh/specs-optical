"use client";
// import AddToCartBtn from './AddToCartBtn';
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { CgEye } from "react-icons/cg";
import { ProductType, SingleProductBySlug } from "@/lib/types";
import AddToCartBtn from "./addtocart";

type ProductProps = {
  product: ProductType | SingleProductBySlug;
};

const Product = ({ product }: ProductProps) => {
  // const popularCategory = product.categories.find(
  //   (category) => category.name === "popular"
  // );
  const imageUrls = product.images.map((image) => image.asset.url);
  return (
    <div className="group">
      <div className="border h-[328px] mb-2 overflow-hidden flex flex-col justify-between">
        <div className="bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all duration-300 flex justify-center items-center relative">
          {/* badge */}
          {/* {popularCategory && (
            <div className="bg-accent text-white px-3 text-sm uppercase font-medium absolute top-2 left-2">
              Popular
            </div>
          )} */}
          <Image
            src={urlFor(product.images[0].asset).url()}
            alt={product.product_name}
            fill={true}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        {/* btn group */}
        <div className="p-2 flex justify-center items-center gap-2 rounded-lg mt-2 ">
          <AddToCartBtn
            id={product.product_name.toString()}
            name={product.product_name}
            currency="TT"
            description={product.description}
            images={imageUrls}
            price={product.price}
            btnStyles="hover:translate-y-[-2px] hover:scale-105 ease-in-out duration-150"
          />
          <Link href={`/products/${product.slug}`}>
            <button className="rounded-lg hover:scale-105 ease-in-out duration-150 bg-blue-950 text-white px-3 py-2 ring-1 ring-black transition-transform hover:translate-y-[-2px]">
              <CgEye />
            </button>
          </Link>
        </div>
      </div>
      <h5 className="text-gray-600 font-semibold">{product.brand}</h5>
      {/* <h4 className="mb-1">{product.product_name}</h4> */}
      <h4 className="mb-1 font-semibold">${product.price}</h4>
    </div>
  );
};

export default Product;
