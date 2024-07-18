import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import MainNav from "./MainNav";
import GetCategories from "@/actions/GetCategories";

const Navbar = async () => {
  const datas = await GetCategories();

  return (
    <div>
      <div className="border-b w-full">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="">
              <Link
                href={"/"}
                className="flex items-center justify-center ml-3 lg:ml-0"
              >
                <p className="text-2xl font-bold">Elektronik</p>
                <Image
                  alt="logo"
                  src={"/images/logo.png"}
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            <MainNav data={datas} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
