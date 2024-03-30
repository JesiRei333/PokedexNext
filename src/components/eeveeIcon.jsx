import Image from "next/image";

export default function Eevee() {
  return (
    <div className="size-9">
      <Image
        src={"https://cdn-icons-png.flaticon.com/512/188/188995.png " || "♥"}
        alt="iconEevee"
        width={36}
        height={36}
      />
    </div>
  );
}
