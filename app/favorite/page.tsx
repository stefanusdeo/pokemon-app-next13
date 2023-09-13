"use client";
import Card from "@/components/card";
import { addLove } from "@/redux/slice/lovedSlice";
import { useAppSelector } from "@/redux/store";
import React from "react";
import { useDispatch } from "react-redux";
function Page() {
  const pokemons = useAppSelector((state) => state.loved.lovePokemons);
  const dispatch = useDispatch();

  const onChangeLove = (type: boolean, data: { name: string; url: string }) => {
    if (type) {
      dispatch(addLove([...pokemons, data]));
    } else {
      const loved = pokemons.filter(
        (pokemon: { name: string; url: string }) => pokemon.name !== data.name
      );
      dispatch(addLove(loved));
    }
  };

  if (pokemons.length === 0) {
    return (
      <main className="flex flex-col items-center justify-between pb-10">
        <p>Not Found</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-between pb-20">
      <>
        <div className="grid grid-cols-2 md:grid-cols-3">
          {pokemons.map((pokemon: { name: string; url: string }, i) => (
            <Card
              data={pokemon}
              key={i}
              handleLove={onChangeLove}
              isLove={
                pokemons.find(
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
      </>
    </main>
  );
}

export default Page;
