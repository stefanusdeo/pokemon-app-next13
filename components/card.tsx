import Image from "next/image";
import Link from "next/link";
import React from "react";
import loveActive from "@/assets/loveActive.png";
import love from "@/assets/love.png";
interface Props {
  data: { name: string; url: string };
  handleLove?: (
    condition: boolean,
    data: { name: string; url: string }
  ) => void | undefined;
  isLove?: boolean;
  isDetail: boolean;
}
function Card({ data, handleLove, isLove, isDetail }: Props) {
  const id = data?.url.match(/\/(\d+)\/$/)?.[1] || "Number not found.";
  return (
    <div className=" bg-blue-200 hover:bg-blue-400 border-gray-400 hover:border-blue-600 m-3 rounded-md p-1 md:p-5 max-w-xs min-w-min">
      <Link href={`/detail/${data?.name}`}>
        <>
          <Image
            alt={data?.name}
            width={200}
            height={200}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          />
          <p className=" mt-5 text-lg md:text-2xl text-blue-600 capitalize text-center">
            {data?.name}
          </p>
        </>
      </Link>
      {!isDetail && (
        <div className=" flex justify-end">
          {isLove ? (
            <Image
              alt="loveActive"
              src={loveActive}
              width={20}
              height={20}
              onClick={() => handleLove && handleLove(false, data)}
            />
          ) : (
            <Image
              alt="love"
              src={love}
              width={20}
              height={20}
              onClick={() => handleLove && handleLove(true, data)}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Card;
