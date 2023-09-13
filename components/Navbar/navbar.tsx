"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PokemonLogo from "@/assets/pokemon.png";
import favorite from "@/assets/favorite.png";
import { useAppSelector } from "@/redux/store";

function Navbar() {
  const lovedPokemon = useAppSelector((state) => state.loved.lovePokemons);
  return (
    <nav className="m-10">
      <div className="grid grid-cols-1 md:grid-cols-1 px-10">
        <div className="flex justify-center md:justify-start">
          <Link href="/">
            <Image alt="pokemon" src={PokemonLogo} width={100} height={50} />
          </Link>
        </div>
        <div className="hidden md:flex justify-end">
          <ul className="flex gap-5 text-xl">
            <li className="border-collapse rounded-md p-2 text-white ">
              <Link href="/favorite" className="flex">
                <Image
                  src={favorite}
                  alt="favorit-icon"
                  width={25}
                  height={25}
                />
                <span
                  className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900"
                  style={{
                    top: "70px",
                    right: "80px",
                  }}
                >
                  {lovedPokemon.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
