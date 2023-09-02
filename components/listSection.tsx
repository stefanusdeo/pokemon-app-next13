"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Card from "./card";

interface Props {
  keyword: String;
}

interface Row {
  name: String;
  url: String;
}

function ListSection({ keyword }: Props) {
  const [collections, setCollections] = useState<
    { name: string; url: string }[]
  >([]);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(24);

  const handleLoad = () => {
    setMin(min + 24);
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["get-Pokemon"],
    queryFn: () =>
      fetch(
        `https://pokeapi.co/api/v2/pokemon/${keyword}?offset=${min}&limit=${max}`
      ).then((res) => res.json()),
  });

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

  useEffect(() => {
    refetch();
  }, [min, keyword]);

  return (
    <>
      {collections.length !== 0 && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3">
            {collections.map((pokemon, i) => (
              <Card data={pokemon} key={i} />
            ))}
          </div>
          <button
            type="button"
            className=" ml-2 px-4 border border-blue-300 rounded-md bg-blue-300 text-white disabled:bg-gray-200"
            onClick={handleLoad}
            disabled={isLoading || keyword !== ""}
          >
            Load More
          </button>
        </>
      )}
    </>
  );
}

export default ListSection;
