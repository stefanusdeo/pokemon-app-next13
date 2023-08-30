import Card from "@/components/card";
import Image from "next/image";
import React from "react";

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
    ? variates?.varieties?.filter((data) => data?.pokemon?.name !== params.slug)
    : [];

  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="font-medium text-4xl capitalize">{pokemon?.name}</h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`}
        alt={params.slug}
        width={350}
        height={350}
      />
      <p>Wight : {pokemon?.weight}</p>
      {pokemon?.stats.map((status, i) => (
        <p
          key={i}
          className=" capitalize"
        >{`${status?.stat?.name} : ${status?.base_stat}`}</p>
      ))}
      {variant.length !== 0 && (
        <div className="items-center mt-3">
          <h2 className=" font-normal text-2xl capitalize text-center">
            Varieties
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            {variant?.map((varian) => (
              <Card data={varian?.pokemon} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
