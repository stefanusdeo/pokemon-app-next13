import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  data: any;
}
function Card({ data }: Props) {
  const id = data?.url.match(/\/(\d+)\/$/)?.[1] || "Number not found.";
  return (
    <Link href={`/detail/${data?.name}`}>
      <div className=" bg-blue-200 hover:bg-blue-400 border-gray-400 hover:border-blue-600 m-3 rounded-md p-5 max-w-xs min-w-min">
        <Image
          alt={data?.name}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          width={200}
          height={200}
        />
        <p className=" mt-5 text-2xl text-blue-600 capitalize text-center">
          {data?.name}
        </p>
      </div>
    </Link>
  );
}

export default Card;
