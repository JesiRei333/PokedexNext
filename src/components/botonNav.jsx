import Image from "next/image";

export default function BotonNav(props) {
  return (
    <div className="flex justify-center items-center hover:translate-y-2  hover:text-xl ">
      <div className=" max-h-7 max-w-7  sm:min-h-8 sm:min-w-8 pl-1">
        <Image
          src={props.srcName || "♥"}
          alt={props.altName || "♥"}
          width={28}
          height={28}
        />
      </div>
      <p className=" pl-1"> {props.textoBoton || "♥"}</p>
    </div>
  );
}