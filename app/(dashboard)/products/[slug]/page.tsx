import Image from "next/image";
import Link from "next/link";
import cool0 from "@/public/cool.jpg";
import cool1 from "@/public/cool2.jpg";
import cool2 from "@/public/cool3.jpg";
import { Star, CheckCircle } from "lucide-react";
import cn from "classnames";
import { SingleProductBySlug } from "@/lib/types";
import { useShoppingCart } from "use-shopping-cart";
import { useToast } from "@/hooks/use-toast";
import { fetchProductsBySlug } from "@/lib/actions";
import AddToCartBtn from "@/components/addtocart";
import { CgShoppingBag } from "react-icons/cg";

type ProductSlugPageProps = {
  params: {
    slug: string;
  };
  searchParams: {
    thumbnail?: string;
    color?: string;
    size?: string;
    review?: string;
  };
};

const ProductSlugPage = async ({
  params,
  searchParams,
}: ProductSlugPageProps) => {
  const selectedThumbnail = parseInt(searchParams.thumbnail || "1");
  const selectedColor = searchParams.color || "black";
  const selectedSize = parseInt(searchParams.size || "7");
  const selectedReview = parseInt(searchParams.review || "0");

  const colors = ["black", "red"];
  const reviews = [1, 2, 3, 4, 5];
  const images = [cool0, cool1, cool2];

  const product: SingleProductBySlug = await fetchProductsBySlug(params.slug);
  const imageUrls = product.images.map((image) => image.asset.url);

  // const { addItem } = useShoppingCart();
  // const { toast } = useToast();
  // const handleAddToCart = () => {
  //   const item = {
  //     id: product.price.toString(),
  //     currency: "TT",
  //     name: product.product_name,
  //     description: product.description,
  //     images: imageUrls,
  //     price: product.price,
  //   };
  //   addItem(item);
  //   toast({
  //     title: `${product.product_name} has been added to the cart`,
  //   });
  // };
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 align-center place-items-center">
      <div className="flex-col space-y-2">
        <section>
          <h1 className="text-3xl font-bold mb-2">
            {product.brand + " " + product.categories[0].name}
          </h1>
          <p className="text-xl mb-4">${product.price}</p>
          <p className="mb-4">product code : {product.product_name}</p>
          <p className="mb-4">{product.description}</p>
        </section>
        <div className="flex p-3 items-center justify-between">
          {images.map((image, index) => (
            <Link
              key={index}
              href={`?thumbnail=${index}&color=${selectedColor}&size=${selectedSize}&review=${selectedReview}`}
              className="relative h-[140px] w-[100px]"
            >
              <Image
                src={image}
                alt={`Thumbnail ${index}`}
                fill={true}
                objectPosition="cover"
                className={cn(
                  "rounded-xl shadow-sm transition-transform duration-150 transform hover:scale-105 ease-in",
                  {
                    "ring-4 ring-blue-500": selectedThumbnail === index,
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
      </div>
      <div className="relative w-[400px] h-[400px]">
        <Image
          src={images[selectedThumbnail]}
          alt="Nike Auth Flyknit"
          fill={true}
          objectPosition="cover"
          className="rounded-xl shadow-sm"
        />
      </div>

      <div className="mb-4 flex-col space-y-4">
        <h2 className="font-semibold my-2 ">REVIEWS</h2>
        <div className="flex space-x-2">
          {reviews.map((review, idx) => (
            <div key={review} className="flex-col items-center">
              <Link
                href={`?thumbnail=${selectedThumbnail}&color=${selectedColor}&size=${selectedSize}&review=${review}`}
                className={cn(
                  "w-10 h-10 border rounded-full flex items-center justify-center transition-transform duration-150 transform hover:scale-105 ease-in",
                  {
                    "ring-2 ring-blue-500": selectedReview === review,
                  }
                )}
              >
                <Star className="text-yellow-400 fill-current" />
              </Link>
              <div
                key={review}
                className={cn("mt-2 text-center text-sm", {
                  "border-b-2 border-blue-500": selectedReview === review,
                })}
              >
                {idx + 1}
              </div>
            </div>
          ))}
        </div>
        <div className="flex space-x-2 mt-2"></div>
        <div className="mb-4">
          <h2 className="font-semibold mb-2">COLORS</h2>
          <div className="flex space-x-2">
            {colors.map((color, index) => (
              <Link
                key={color}
                href={`?thumbnail=${selectedThumbnail}&color=${color}&size=${selectedSize}&review=${selectedReview}`}
                className={cn(
                  `w-8 h-8 rounded-full bg-${color}${color === "black" ? "" : "-400"} transition-transform duration-150 transform hover:scale-105 ease-in`,
                  {
                    "ring-2 ring-blue-500": selectedColor === color,
                  }
                )}
              ></Link>
            ))}
          </div>
        </div>
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default ProductSlugPage;
