"use client";
import Card from "@/components/card";
import ListSection from "@/components/listSection";
import { useState, useEffect } from "react";

export default function Home() {
  const [pokemon, setPokemon] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(24);
  const [keyword, setKeyword] = useState("");

  const handleLoad = () => {
    setMin(min + 24);
    setMax(24);
  };

  const handleSearch = () => {
    if (!keyword) {
      setMin(0);
    }
    setPokemon(keyword);
  };

  return (
    <main className="flex flex-col items-center justify-between p-10">
      <div className="flex">
        <input
          type="text"
          placeholder="Search Pokemon"
          className="border border-blue-400 bg-blue-100 placeholder-blue-400 rounded-md p-3"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          type="button"
          className=" ml-2 px-4 border border-blue-300 rounded-md bg-blue-300 text-white"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <ListSection
        min={min}
        max={max}
        keyword={pokemon}
        handleLoad={handleLoad}
      />
    </main>
  );
}
