import Card from "@/components/card";
import Image from "next/image";
import React from "react";

interface PokemonVariety {
  pokemon: {
    name: string;
  };
}

async function getData(param: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${param}`, {
    method: "GET",
  });
  const data = await res.json();

  return data;
}

async function getVariation(param: string) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${param}`,
    { method: "GET" }
  );

  if (res.status !== 404) {
    const data = await res.json();
    return data;
  } else {
    return;
  }
}

async function Page({ params }: { params: { slug: string } }) {
  const pokemon = await getData(params.slug);
  const variates = await getVariation(params.slug);
  const variant = variates
    ? variates?.varieties?.filter(
        (data: PokemonVariety) => data?.pokemon?.name !== params.slug
      )
    : [];

  return (
    <div className="flex flex-col items-center pb-20">
      <h1 className="font-medium text-center text-4xl capitalize">
        {pokemon?.name}
      </h1>
      <div className="  w-full grid grid-cols-1 md:grid-cols-2  p-2  lg:px-20">
        <div className="mt-5 items-center justify-center flex flex-col">
          <div className="w-40">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`}
              alt={params.slug}
              width={300}
              height={300}
              className=""
            />
          </div>
        </div>
        <div className="justify-start w-full mt-20 bg-blue-200 rounded-md p-10">
          {pokemon?.stats.map((status: any, i: number) => (
            <div className="w-full grid grid-cols-2 my-2" key={i}>
              <div className=" text-left capitalize mr-4">
                {status?.stat?.name}
              </div>
              <div className="mr-5 w-full">
                <div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-400">
                  <div
                    className="flex flex-col justify-center overflow-hidden bg-blue-500 text-xs text-white text-center"
                    style={{
                      width: `${status?.base_stat}%`,
                    }}
                  >
                    {status?.base_stat}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {variant.length !== 0 && (
        <div className="items-center mt-5">
          <h2 className=" font-normal text-2xl capitalize text-center">
            Varieties
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            {variant?.map((varian: any) => (
              <Card data={varian?.pokemon} isDetail={true} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
