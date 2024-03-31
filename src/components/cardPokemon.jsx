import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MandoMorado from "./mandoMorado";
export default function PokemonCard(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.name || "1"}`)
      .then((response) => response.json())
      .then((json) => {
        setPokemon(json);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [props.name]);

  if (!pokemon.sprites || !pokemon.name) {
    return <div className="w-full bg-slate-800 animate-pulse min-h-20"></div>;
  }

  return (
    <div
      id="pokeCard"
      className=" bg-[url('https://wallpapers-clan.com/wp-content/uploads/2022/05/pokemon-gengar-minimalist-wallpaper.jpg')] bg-contain bg-right-bottom  bg-repeat 
      sm:hover:translate-x-2 hover:translate-y-2    md:hover:translate-x-8 md:hover:translate-y-8 hover:shadow-xl  hover:shadow-rose-900/80 
    hover:bg-opacity-30 rounded-xl flex  align-middle items-center  "
    >
      {!pokemon.sprites.other["official-artwork"].front_default && (
        <p> cargando </p>
      )}
      <Link
        href={`/pokedex/${props.name}` || "♥"}
        className="w-full text-lg bg-black/20 text-slate-300"
      >
        <div className=" font-semibold text-white  md:font-extralight text-neutral-50/50 hover:font-bold flex flex-col bg-black/50 items-center p-0.5 ">
          <Image
            src={
              pokemon.sprites?.other["official-artwork"]?.front_default || "♥"
            }
            alt={props.name || "♥"}
            width={400}
            height={400}
          />

          <div className=" pb-2 flex justify-center align-middle text-center flex-row sm:hover:translate-x-2 hover:translate-y-2   ">
            <MandoMorado />
            <div className=" flex ">
              <p className="hover:shadow-cyan-400 hover:shadow-2xl text-xl ">
                {props.name.toUpperCase() || "♥"}
              </p>
            </div>
            <MandoMorado />
          </div>
        </div>
      </Link>
    </div>
  );
}
