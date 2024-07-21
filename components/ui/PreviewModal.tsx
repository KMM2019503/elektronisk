"use client";

import usePreviewModalStore from "@/hooks/usePreviewModal";
import React from "react";
import Modal from "./modal";
import Gallery from "../gallery";
import ProductInfo from "../ProductInfo";

const PreviewModal = () => {
  const PreviewModlaStore = usePreviewModalStore();
  const product = usePreviewModalStore((state) => state.data);

  if (!product) {
    return null;
  }
  return (
    <Modal open={PreviewModlaStore.isOpen} onClose={PreviewModlaStore.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <ProductInfo product={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
