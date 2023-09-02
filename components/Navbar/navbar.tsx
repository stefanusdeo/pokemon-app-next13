import Image from "next/image";
import Link from "next/link";
import React from "react";
import PokemonLogo from "@/assets/pokemon.png";

function Navbar() {
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
            {/* <li className="border-collapse bg-blue-400 rounded-md p-2 text-white hover:bg-blue-500">
              <Link href="/favorite">Favorite</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
