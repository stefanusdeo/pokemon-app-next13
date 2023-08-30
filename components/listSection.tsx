"use client";
import useSWR from "swr";
import { useState, useEffect } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

import React from "react";
import Card from "./card";

interface Props {
  min: Number;
  max: Number;
  handleLoad: any;
  keyword: String;
}

interface Row {
  name: String;
  url: String;
}

function ListSection({ min, max, keyword, handleLoad }: Props) {
  const [collections, setCollections] = useState<
    { name: string; url: string }[]
  >([]);
  //   const [data, setData] = useState(null);

  //   const fetching = async () => {
  //     const resp = await fetch(
  //       `https://pokeapi.co/api/v2/pokemon/${keyword}?offset=${min}&limit=${max}`,
  //       { method: "GET" }
  //     );
  //     const dataJson = await resp.json();

  //     setCollections((prev) => [...collections, ...dataJson?.results]);
  //   };

  const { data, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${keyword}?offset=${min}&limit=${max}`,
    fetcher
  );
  useEffect(() => {
    if (keyword) {
      setCollections([
        {
          name: data?.name,
          url: `https://pokeapi.co/api/v2/pokemon/${data?.id}/`,
        },
      ]);
    } else {
      if (data?.results) {
        setCollections((prev) => [...prev, ...data?.results]);
      }
    }
  }, [data]);

  //   useEffect(() => {
  //     fetching();
  //   }, [min, max, keyword]);

  return (
    <>
      {collections.length !== 0 && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            {collections.map((pokemon, i) => (
              <Card data={pokemon} key={i} />
            ))}
          </div>
          <button
            type="button"
            className=" ml-2 px-4 border border-blue-300 rounded-md bg-blue-300 text-white disabled:bg-gray-200"
            onClick={handleLoad}
            disabled={isLoading}
          >
            Load More
          </button>
        </>
      )}
    </>
  );
}

export default ListSection;
