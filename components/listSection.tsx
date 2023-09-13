"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useQuery } from "react-query";
import Card from "./card";
import { addPokemon } from "@/redux/slice/listSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { changePage } from "@/redux/slice/paginateSlice";
import { removeDuplicates } from "@/utils/removeDuplicate";
import { toast } from "react-toastify";
import { addLove } from "@/redux/slice/lovedSlice";

interface Props {
  keyword: String;
}

interface Row {
  name: String;
  url: String;
}

function ListSection({ keyword }: Props) {
  const pokemons = useAppSelector((state) => state.list.pokemons);
  const page = useAppSelector((state) => state.paginate.page);
  const lovePokemons = useAppSelector((state) => state.loved.lovePokemons);
  const dispatch = useDispatch<AppDispatch>();

  const handleLoad = () => {
    dispatch(changePage(page + 24));
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["get-Pokemon", page],
    queryFn: () =>
      fetch(
        `https://pokeapi.co/api/v2/pokemon/${keyword}?offset=${page}&limit=24`
      ).then((res) => res.json()),
  });

  useEffect(() => {
    refetch();
    if (keyword) {
      if (data.name) {
        console.log({
          name: data.name,
          url: `https://pokeapi.co/api/v2/pokemon/${data.id}`,
        });
        dispatch(
          addPokemon([
            {
              name: data.name,
              url: `https://pokeapi.co/api/v2/pokemon/${data.id}/`,
            },
          ])
        );
      } else {
        dispatch(addPokemon([]));
      }
    } else {
      if (data?.results) {
        const dataPokemon = [...pokemons, ...data?.results];
        const uniqueData = removeDuplicates(dataPokemon, "name");
        dispatch(addPokemon(uniqueData));
      }
    }
  }, [data, keyword]);

  const onChangeLove = (type: boolean, data: { name: string; url: string }) => {
    if (type) {
      dispatch(addLove([...lovePokemons, data]));
    } else {
      const loved = lovePokemons.filter(
        (pokemon: { name: string; url: string }) => pokemon.name !== data.name
      );
      dispatch(addLove(loved));
    }
  };

  return (
    <>
      {pokemons.length !== 0 && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3">
            {pokemons.map((pokemon: { name: string; url: string }, i) => (
              <Card
                data={pokemon}
                key={i}
                handleLove={onChangeLove}
                isLove={
                  lovePokemons.find(
                    (data: { name: string; url: string }) =>
                      data.name === pokemon.name
                  )
                    ? true
                    : false
                }
                isDetail={false}
              />
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
