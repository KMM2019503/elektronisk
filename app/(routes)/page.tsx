import React from "react";

import GetProducts from "@/actions/GetProduct";
import GetBillboard from "@/actions/GetBillboard";
import Billboard from "@/components/Billboard";
import Container from "@/components/Container";
import ProductLists from "@/components/ProductLists";

export const revalidate = 0;

const HomePage = async () => {
  const products = await GetProducts({ isFeatured: true });
  const billboard = await GetBillboard("d4a20756-cc8c-4636-be8a-f0759af2f9ad");
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
