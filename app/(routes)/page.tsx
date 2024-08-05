// app/(routes)/page.tsx

import GetProducts from "@/actions/GetProducts";
import GetBillboard from "@/actions/GetBillboard";
import Container from "@/components/Container";
import Billboard from "@/components/Billboard";
import ProductLists from "@/components/ProductLists";

export const revalidate = 0;

const HomePage = async () => {
  const products = await GetProducts({ isFeatured: true });
  const billboard = await GetBillboard("13892854-ba2a-4fa4-b338-88e139d5a243");

  return (
    <Container>
      <div className="space-t-10 pb-10">
        <Billboard billboard={billboard} />

        <ProductLists products={products} />
      </div>
    </Container>
  );
};

export default HomePage;
