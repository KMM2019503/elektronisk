import Image from "next/image";

export default function Loading() {
  return (
    <div className="md:h-[620px] flex justify-center items-center text-7xl font-bold font-mono shadow-lg">
      L
      <Image
        src={"/images/logo.png"}
        alt={"Loading Photo"}
        loading="eager"
        height={50}
        width={50}
        className="animate-bounce"
      />
      ading
    </div>
  );
}
