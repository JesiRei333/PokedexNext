import "@/styles/globals.css";
import Link from "next/link";
//import Image from "next/image";
import BotonNav from "@/src/components/botonNav";

export default function App({ Component, pageProps }) {
  return (
    <main className="bg-[url('https://wallpapers-clan.com/wp-content/uploads/2022/05/pokemon-gengar-minimalist-wallpaper.jpg')] bg-opacity-80 bg-repeat-space bg-right-bottom ">
      <nav className=" fixed flex  flex-row sm:text-xs justify-center font-semibold w-full  bg-white/20 md:text-xl lg:justify-around lg:p-1.5 lg:pl-60 lg:pr-60 gap-1">
        <Link
          className=" hover:font-extrabold text-xs md:text-xl pl-1 min-h-8 min-w-8"
          href="/"
        >
          <BotonNav
            srcName={
              "https://cdn-icons-png.flaticon.com/512/1408/1408856.png" || "♥"
            }
            altName={"pokebolaBlack"}
            textoBoton={"PokeHome"}
          />
        </Link>
        <Link
          className=" hover:font-extrabold text-xs md:text-xl   pl-1 min-h-8 min-w-8"
          href="/pokedex"
        >
          <BotonNav
            srcName={"https://cdn-icons-png.flaticon.com/512/419/419467.png"}
            altName={"pokebola"}
            textoBoton={"Pokédex"}
          />
        </Link>
        <Link
          className=" hover:font-extraboldpl-1 text-xs md:text-xl  min-h-8 min-w-8 "
          href="/pokeGancha"
        >
          <BotonNav
            srcName={
              "https://cdn-icons-png.flaticon.com/512/188/188982.png" || "♥"
            }
            altName={"pokebolaGancha"}
            textoBoton={"PokeGancha"}
          />
        </Link>
        <Link
          className="hover:font-extrabold pl-1 text-xs md:text-xl  min-h-8 min-w-8"
          href="/pokeInicial"
        >
          <BotonNav
            srcName={
              "https://cdn-icons-png.flaticon.com/512/362/362000.png" || "♥"
            }
            altName={"pokemonCelular"}
            textoBoton={"PokeInicial"}
          />
        </Link>
      </nav>
      <div className="bg-[url('https://wallpapers-clan.com/wp-content/uploads/2022/05/pokemon-gengar-minimalist-wallpaper.jpg')] bg-opacity-80 bg-repeat-space bg-right-bottom  ">
        <Component {...pageProps} />
      </div>
    </main>
  );
}
