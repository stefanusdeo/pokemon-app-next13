"use client";
import Card from "@/components/card";
import ListSection from "@/components/listSection";
import { useState, useEffect } from "react";

export default function Home() {
  const [pokemon, setPokemon] = useState("");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setPokemon(keyword);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  return (
    <main className="flex flex-col items-center justify-between pb-10">
      <div className="flex">
        <input
          type="text"
          placeholder="Search Pokemon"
          className="border border-blue-400 bg-blue-100 placeholder-blue-400 rounded-md p-3"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <ListSection keyword={pokemon} />
    </main>
  );
}
