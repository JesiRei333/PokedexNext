import Image from "next/image";
import { Inter, Lilita_One } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Link href="/pokedex">
        <div className="flex flex-col items-center pt-10">
          <div className="w-full max-w-md hover:translate-y-2 pt-9 ">
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" ||
                "♥"
              }
              alt="pokemonLogo"
              width={700}
              height={70}
            />
          </div>
          <div className="flex justify-center items-center align-middle font-semibold hover:translate-y-2 p-2  ">
            <p className="flex text-wrap text-center sm:text-lg text-white ">
              Click ♥ Tap para comezar
            </p>
          </div>
        </div>
      </Link>
    </main>
  );
}
