import { useEffect, useState } from "react";
import Image from "next/image";
import CardDescrip from "@/src/components/cardDescrip";
import { useRouter } from "next/router";

export default function PokedexDescrip() {
  const [pokemon, setPokemon] = useState({});
  const router = useRouter();
  let name = router.query.name;
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((json) => {
        setPokemon(json);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [name]);

  if (!pokemon.sprites) {
    return (
      <article className="w-full bg-slate-800 animate-pulse min-h-20"></article>
    );
  }

  return (
    <div
      className=" bg-[url('https://wallpapers-clan.com/wp-content/uploads/2022/05/pokemon-gengar-minimalist-wallpaper.jpg')]  bg-opacity-80 bg-right-bottom  bg-repeat
     bg-slate-950 text-slate-300 md:min-h-screen md:min-w-full flex flex-col items-center pt-16 "
    >
      <Image
        src="https://cdn-icons-png.flaticon.com/512/188/188961.png"
        alt="gatchaImagen"
        width={60}
        height={60}
      />

      <div className="flex min-h-screen-md items-center justify-center   min-w-[800px]  hover:shadow-xl hover:translate-x-3">
        <CardDescrip name={pokemon.name} className="" />
      </div>
    </div>
  );
}
