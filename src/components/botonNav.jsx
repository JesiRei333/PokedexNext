import Image from "next/image";

export default function BotonNav(props) {
  return (
    <div className="flex sm:flex-col md:flex-row  min-h-8 min-w-8 items-center hover:font-extrabold  ">
      <div className=" max-h-8 max-w-8  min-h-8 min-w-8 pl-1 sm:flex-col md:flex-row ">
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
