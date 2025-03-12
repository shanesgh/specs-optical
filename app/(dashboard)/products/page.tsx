import { Suspense } from "react";
import Products from "@/components/productcategories";
import { fetchProducts } from "@/lib/actions";
import { ProductType } from "@/lib/types";

const ProductsPage = async () => {
  const products: ProductType[] = await fetchProducts();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Products products={products} />
    </Suspense>
  );
};

export default ProductsPage;
