import { useEffect, useState } from "react";
import CardDescrip from "@/src/components/cardDescrip";
import Image from "next/image";

export default function PokemonInicial() {
  const [pokemon, setPokemon] = useState({});

  const PokeRandom = () => {
    const poke = [
      1, 4, 7, 152, 155, 158, 252, 255, 258, 387, 390, 393, 495, 498, 501, 650,
      653, 656, 722, 725, 728, 810, 813, 816, 906, 909, 912,
    ];
    const pokeRandom = Math.floor(Math.random() * poke.length);
    return poke[pokeRandom];
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${PokeRandom()}`)
      .then((response) => response.json())
      .then((json) => {
        setPokemon(json);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  if (!pokemon.sprites) {
    return (
      <article className="w-full bg-slate-800 animate-pulse min-h-20"></article>
    );
  }

  return (
    <main
      className=" hover:shadow-xl  hover:shadow-rose-900/80 bg-[url('https://wallpapers-clan.com/wp-content/uploads/2022/05/pokemon-gengar-minimalist-wallpaper.jpg')]  bg-opacity-80 bg-right-bottom  bg-repeat
     bg-slate-950 text-slate-300 min-h-screen flex flex-col items-center pt-8 "
    >
      <div>
        <p className="font-semibold text-xl flex flex-col items-center pt-10 pb-5 ">
          tu Pokemón inicial es:
          <Image
            src="https://cdn-icons-png.flaticon.com/512/188/188932.png"
            alt="gatchaImagen"
            width={50}
            height={50}
          />
        </p>
      </div>
      <CardDescrip name={pokemon.name} />
    </main>
  );
}
