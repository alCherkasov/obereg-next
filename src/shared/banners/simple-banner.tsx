import Image from "next/image";

export const SimpleBanner = () => {
  return (
    <div className="relative flex w-full h-full">
      <Image src={"/img/gallery/img-gal1.webp"} alt="Баннер" fill />
    </div>
  );
};
