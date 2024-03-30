import "@/styles/globals.css";
import Link from "next/link";
//import Image from "next/image";
import BotonNav from "@/src/components/botonNav";

export default function App({ Component, pageProps }) {
  return (
    <main className="bg-[url('https://wallpapers-clan.com/wp-content/uploads/2022/05/pokemon-gengar-minimalist-wallpaper.jpg')] bg-opacity-80 bg-repeat-space bg-right-bottom ">
      <nav className=" fixed flex  flex-row sm:text-sm justify-center font-semibold w-full  bg-white/20 md:text-xl lg:justify-around lg:p-1.5 lg:pl-60 lg:pr-60 gap-1">
        <Link className=" pl-1 " href="/">
          <BotonNav
            srcName={
              "https://cdn-icons-png.flaticon.com/512/1408/1408856.png" || "♥"
            }
            altName={"pokebolaBlack"}
            textoBoton={"PokeHome"}
          />
        </Link>
        <Link className=" pl-1 " href="/pokedex">
          <BotonNav
            srcName={"https://cdn-icons-png.flaticon.com/512/528/528101.png "}
            altName={"pokebolaRed"}
            textoBoton={"Pokédex"}
          />
        </Link>
        <Link className=" pl-1 " href="/pokeGancha">
          <BotonNav
            srcName={
              "https://cdn-icons-png.flaticon.com/512/188/188982.png" || "♥"
            }
            altName={"pokebolaGancha"}
            textoBoton={"PokeGancha"}
          />
        </Link>
        <Link className=" pl-1 " href="/pokeInicial">
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
