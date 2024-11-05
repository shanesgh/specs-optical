"use client";
// import AddToCartBtn from './AddToCartBtn';
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { CgEye, CgShoppingBag } from "react-icons/cg";
import { ProductType } from "@/lib/types";
import AddToCartBtn from "./addtocart";

type ProductProps = {
  product: ProductType;
};

const Product = ({ product }: ProductProps) => {
  const popularCategory = product.categories.find(
    (category) => category.name === "popular"
  );
  const imageUrls = product.images.map((image) => image.asset.url);

  return (
    <div className="group">
      <div className="border h-[328px] mb-5 overflow-hidden flex flex-col justify-between">
        <div className="bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all duration-300 flex justify-center items-center relative">
          {/* badge */}
          {popularCategory && (
            <div className="bg-accent text-white px-3 text-sm uppercase font-medium absolute top-2 left-2">
              Popular
            </div>
          )}
          <Image
            src={urlFor(product.images[0].asset).url()}
            alt={product.product_name}
            fill={true}
            className="object-cover"
          />
        </div>
        {/* btn group */}
        <div className="p-2 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg mt-2 shadow-md hover:translate-y-[-2px] hover:shadow-lg">
          <AddToCartBtn
            id={product.price.toString()}
            name={product.product_name}
            currency="TT"
            description={product.description}
            images={imageUrls}
            price={product.price}
            icon={<CgShoppingBag />}
            btnStyles="hover:shadow-2xl active:shadow-inner"
          />
          <Link href={`/products/${product.slug}`}>
            <button className=" rounded-lg shadow-lg hover:shadow-2xl active:shadow-inner bg-blue-950 text-white px-3 py-2 ring-1 ring-black transition-transform duration-200 hover:translate-y-[-2px] ">
              <CgEye />
            </button>
          </Link>
        </div>
      </div>
      <h5 className="text-gray-400 font-semibold">{product.brand}</h5>
      <h4 className="mb-1">{product.product_name}</h4>
      <div className="text-lg font-bold text-accent">${product.price}</div>
    </div>
  );
};

export default Product;
