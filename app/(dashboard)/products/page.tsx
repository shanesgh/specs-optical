import Products from "@/components/productcategories";
import { fetchProducts } from "@/lib/actions";
import { ProductType } from "@/lib/types";

const ProductsPage = async () => {
  const products: ProductType[] = await fetchProducts();
  return (
    <>
      <Products products={products} />
    </>
  );
};

export default ProductsPage;
