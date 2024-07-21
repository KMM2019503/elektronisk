import GetBackcolors from "@/actions/GetBackcolors";
import GetBillboard from "@/actions/GetBillboard";
import GetCategory from "@/actions/GetCategory";
import GetProducts from "@/actions/GetProducts";
import Billboard from "@/components/Billboard";
import Container from "@/components/Container";
import ProductLists from "@/components/ProductLists";
import Filter from "./components/Filter";

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
    categoryId: params.categoryId,
    backcolorId: searchParams.backcolorId,
  });

  return (
    <Container>
      <div className="space-t-10 pb-10">
        <Billboard billboard={category.billboard} />

        <div className="flex flex-col gap-5">
          <Filter data={backcolors} valueKey="backcolorId" name="Backcolor" />
          <ProductLists products={products} />
        </div>
      </div>
    </Container>
  );
};

export default Category;
