import { useEffect, useState } from "react";
import PokemonCard from "@/src/components/cardPokemon";
import Image from "next/image";
import Eevee from "@/src/components/eeveeIcon";

export default function Pokemon() {
  const [pokemons, setPokemons] = useState([]);
  // const [countPokemon, setCountPokemon] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${151}`)
      .then((response) => response.json())
      .then((json) => {
        setPokemons(json.results);
      })
      .catch((error) => {
        console.error("Error fetching" + error);
      });
  }, []);

  return (
    <div
      id="contenedor"
      className=" 
   bg-slate-950 text-slate-300 min-h-screen min-w-screen flex flex-col items-center p-10 gap-10 bg-[url('https://wallpapers-clan.com/wp-content/uploads/2022/05/pokemon-gengar-minimalist-wallpaper.jpg')] bg-repeat-y bg-contain bg-right-bottom "
    >
      <div className="flex flex-col items-center pt-10">
        <div className="w-full max-w-sm hover:translate-y-2  ">
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
            }
            alt="pokemonLogo"
            width={600}
            height={70}
          />
        </div>
        <div className="flex justify-center items-center align-middle font-semibold hover:translate-y-2  ">
          <Eevee />
          <p className="text-xl ">Click ♥ Tap tu favorito</p>
          <Eevee />
        </div>
      </div>

      <section className="  grid md:grid-cols-3 gap-20 rounded-xl w-full min-h-screen bg-transparent  text-lg ">
        {pokemons.map((pokemon, index) => {
          return (
            <PokemonCard
              key={`pokemon-${index}`}
              name={pokemon.name || "Pokemon"}
            />
          );
        })}
      </section>
    </div>
  );
}
