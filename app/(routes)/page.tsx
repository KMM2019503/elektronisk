import React from "react";

import GetProducts from "@/actions/GetProducts";
import GetBillboard from "@/actions/GetBillboard";
import Billboard from "@/components/Billboard";
import Container from "@/components/Container";
import ProductLists from "@/components/ProductLists";

export const revalidate = 0;

const HomePage = async () => {
  const products = await GetProducts({ isFeatured: true });
  const billboard = await GetBillboard("13892854-ba2a-4fa4-b338-88e139d5a243");
  return (
    <Container>
      <div className="space-t-10 pb-10">
        <Billboard billboard={billboard} />

        <div>
          <ProductLists products={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
