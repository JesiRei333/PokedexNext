import Image from "next/image";

export default function MandoMorado() {
  return (
    <div className="size-9">
      <Image
        src={"https://cdn-icons-png.flaticon.com/512/14071/14071327.png" || "♥"}
        alt="mandoMorado"
        width={36}
        height={36}
      />
    </div>
  );
}
