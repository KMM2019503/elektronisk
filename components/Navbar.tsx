import React from "react";
import Link from "next/link";

import Container from "./Container";
import Image from "next/image";
import MainNav from "./MainNav";
import GetCategories from "@/actions/GetCategories";
import NavbarAction from "./NavbarAction";

export const revalidate = 0;

const Navbar = async () => {
  const data = await GetCategories();

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
                <p className="text-2xl font-bold font-mono tracking-tight">
                  Elektronik
                </p>
                <Image
                  alt="logo"
                  src={"/images/logo.png"}
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            <MainNav data={data} />
            <NavbarAction />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
