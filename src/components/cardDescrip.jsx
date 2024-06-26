import { useEffect, useState } from "react";
import Image from "next/image";
export default function CardDescrip(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
      .then((response) => response.json())
      .then((json) => {
        setPokemon(json);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [props.name]);

  if (!pokemon.sprites) {
    return (
      <article className="w-full bg-slate-800 animate-pulse min-h-20"></article>
    );
  }
  return (
    <div className=" bg-black hover:shadow-xl  hover:shadow-rose-900/80  text-white text-xl flex flex-col items-center justify-center text-center  rounded-lg">
      {!pokemon.sprites.other["official-artwork"].front_default && (
        <p> cargando </p>
      )}
      <div className="flex flex-col items-center font-extrabold   ">
        <p className="">
          {pokemon.id} {"° "} {props.name.toUpperCase()}
        </p>
      </div>

      <div className="hover:translate-x-3 hover:translate-y-3  ">
        <Image
          className=""
          src={pokemon.sprites?.other["official-artwork"].front_default}
          alt={pokemon.name}
          width={450}
          height={450}
        />
      </div>

      <div
        className="flex flex-row bg-contain  p-2  text-white rounded-md
            align-middle  text-center
          bg-[url('https://wallpapers-clan.com/wp-content/uploads/2022/05/pokemon-gengar-minimalist-wallpaper.jpg')]
          hover:translate-x-1 hover:translate-y-1  hover:shadow-2xl  hover:shadow-cyan-400/40 gap-1 rounded"
      >
        <div className="flex flex-col gap-1  text-xs md:text-xl">
          <p className="sm:gap-0  font-extrabold md:gap-1  ">Tipo:</p>

          <ul className="">
            <li>{pokemon.types[0]?.type?.name}</li>
            <li>{pokemon.types[1]?.type?.name}</li>
            <li>{pokemon.types[2]?.type?.name}</li>
          </ul>
        </div>
        <br />
        <div className="flex flex-col gap-1  text-xs md:text-xl">
          <p className="text-base font-extrabold gap-1">Habilidades:</p>
          <ul>
            <li>{pokemon.abilities[0]?.ability?.name}</li>
            <li>{pokemon.abilities[1]?.ability?.name}</li>
            <li>{pokemon.abilities[2]?.ability?.name}</li>
          </ul>
          <br />
        </div>
        <br />

        <div className="flex  flex-col gap-1 text-xs md:text-xl">
          <p className="text-base font-extrabold gap-1">Experiencia base:</p>

          <p>{pokemon.base_experience}</p>
        </div>
      </div>
    </div>
  );
}
