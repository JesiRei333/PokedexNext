import Image from "next/image";

export default function BotonNav(props) {
  return (
    <div className="flex justify-center min-h-8 min-w-8 items-center hover:font-extrabold ">
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
