import GetProduct from "@/actions/GetProduct";
import GetProducts from "@/actions/GetProducts";
import Container from "@/components/Container";
import Gallery from "@/components/gallery";
import ProductInfo from "@/components/ProductInfo";
import ProductLists from "@/components/ProductLists";

export const revalidate = 0;

const IndividualProduct = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const product = await GetProduct({ id: params.productId });
  const suggestedProducts = await GetProducts({
    categoryId: product.categoryId,
  });

  const filteredSuggestedProducts = suggestedProducts.filter(
    (product) => product.id !== params.productId
  );
  return (
    <div>
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="w-full lg:grid lg:grid-cols-3 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="">
              <ProductInfo product={product} />
            </div>
            <div className="bg-transparent h-full w-[1px] hidden lg:block" />
          </div>
          <hr className="mt-10 mb-3" />
          <div className="">
            <h2 className="font-semibold text-lg mb-5">Suggested Products</h2>
            <ProductLists products={filteredSuggestedProducts} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IndividualProduct;
