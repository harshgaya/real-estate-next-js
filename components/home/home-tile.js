import Image from "next/image";
import ButtonRounded from "../buttons/button-rounded";

export default function HomeTile({ image, price, bed, bath, area }) {
  return (
    <div className="rounded-lg bg-customBgImageTile w-full md:w-[577px]  md:h-[582px] mt-10">
      <Image src={image} height={450} width={577} alt="home" />
      <div className="px-3 flex justify-between items-center py-3">
        <h2 className="font-monte text-customBorderColor font-semibold text-2xl">
          ${price}
        </h2>
        <ButtonRounded name={"View Details"} />
      </div>
      <div className=" px-3 py-3">
        <div className="border border-customBorderColor rounded-lg h-[42px] flex justify-around items-center border-opacity-35">
          <div className="flex space-x-2 justify-center items-center">
            <Image src={"/homes/bed.png"} height={16} width={16} alt="bed" />
            <p className="font-monte font-semibold text-sm text-customBorderColor text-opacity-65">
              {bed} Bedrooms
            </p>
          </div>
          <div className="h-full w-[1px] bg-customBorderColor bg-opacity-35"></div>
          <div className="flex space-x-2 justify-center items-center">
            <Image src={"/homes/bath.png"} height={16} width={16} alt="bed" />
            <p className="font-monte font-semibold text-sm text-customBorderColor text-opacity-65">
              {bath} Bath
            </p>
          </div>
          <div className="h-full w-[1px] bg-customBorderColor bg-opacity-35"></div>
          <div className="flex space-x-2 justify-center items-center">
            <p className="font-monte font-semibold text-sm text-customBorderColor text-opacity-65">
              {area} sq ft
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
