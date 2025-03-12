import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import cn from "classnames";
import { ImageSanity, SingleProductBySlug } from "@/lib/types";
import { fetchProductsBySlug } from "@/lib/actions";
import AddToCartBtn from "@/components/addtocart";
import { CgShoppingBag } from "react-icons/cg";
import { redirect } from "next/navigation";

type ProductSlugPageProps = {
  params: {
    slug: string;
  };
  searchParams: {
    thumbnail?: string;
  };
};

const ProductSlugPage = async ({
  params,
  searchParams,
}: ProductSlugPageProps) => {
  const selectedThumbnail = parseInt(searchParams.thumbnail || "0");

  let product: SingleProductBySlug | null = null;

  try {
    product = await fetchProductsBySlug(params.slug);
  } catch (error) {
    console.error("Error fetching product:", error);
    return redirect("/products");
  }

  if (!product) {
    return redirect("/products");
  }

  const images = Array.isArray(product.images)
    ? product.images.map((image) => image.asset.url)
    : [product.images as ImageSanity].map((image) => image.asset.url);

  const description = product.description || "";

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6 align-center place-items-center">
      <div className="flex flex-col space-y-2">
        <section>
          <h1 className="text-3xl font-bold mb-4">
            {`${product.brand} ${(product.categories && (product.categories[0]?.name == "Contacts" ? "Contacts" : "Glasses")) || ""}`.trim()}
          </h1>
          <div className="flex items-center justify-between mb-2">
            <p className="mr-4">Code: {product.product_name}</p>
            <p className="mr-4 font-semibold">Price: ${product.price}</p>
            <AddToCartBtn
              id={product.product_name}
              name={product.product_name}
              currency="TT"
              description={product.description}
              images={images}
              price={product.price}
              icon={<CgShoppingBag />}
              btnStyles="hover:shadow-2xl active:shadow-inner rounded-xl ml-2"
            />
          </div>
          {description && <p className="mb-4">{description}</p>}
        </section>
        {images.length > 1 && (
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {images.map((image, index) => (
              <Link
                key={index}
                href={`?thumbnail=${index}`}
                className={cn(
                  "relative h-[110px] w-[70px] sm:h-[140px] sm:w-[100px]",
                  { hidden: index >= images.length }
                )}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index}`}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className={cn(
                    "rounded-xl shadow-sm transition-transform duration-150 transform hover:scale-105 ease-in",
                    {
                      "ring-4 ring-blue-950": selectedThumbnail === index,
                      "ring-1 ring-gray-300": selectedThumbnail !== index,
                    }
                  )}
                />
                {selectedThumbnail === index && (
                  <CheckCircle className="absolute top-2 right-2 text-blue-500 animate-pulse" />
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="relative w-full h-[250px] md:w-[380px] md:h-[380px]">
        {images.length > 0 && (
          <Image
            src={images[selectedThumbnail] || images[0]}
            alt="Product Image"
            fill={true}
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="rounded-xl shadow-sm"
          />
        )}
      </div>
    </div>
  );
};

export default ProductSlugPage;
