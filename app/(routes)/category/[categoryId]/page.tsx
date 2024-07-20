import GetBackcolors from "@/actions/GetBackcolors";
import GetBillboard from "@/actions/GetBillboard";
import GetCategory from "@/actions/GetCategory";
import GetProducts from "@/actions/GetProducts";
import Billboard from "@/components/Billboard";
import Container from "@/components/Container";
import ProductLists from "@/components/ProductLists";

export const revalidate = 0;

interface CategoryProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    backcolorId: string;
  };
}

const Category = async ({ params, searchParams }: CategoryProps) => {
  const category = await GetCategory(params.categoryId);

  const backcolors = await GetBackcolors();

  const products = await GetProducts({
    categoryId: category.id,
    backcolorId: searchParams.backcolorId,
  });

  return (
    <Container>
      <div className="space-t-10 pb-10">
        <Billboard billboard={category.billboard} />

        <div className="flex flex-col gap-5">
          <div className="flex  max-w-[300px] md:max-w-[500px] lg:max-w-[700px] overflow-x-auto gap-3 self-center p-3">
            {backcolors.map((color) => (
              <div
                className="w-10 h-6 md:w-12 md:h-6 lg:w-16 lg:h-6 rounded-md shadow-md cursor-pointer hover:scale-105 transition"
                style={{ backgroundColor: color.value }}
              />
            ))}
          </div>
          <ProductLists products={products} />
        </div>
      </div>
    </Container>
  );
};

export default Category;
