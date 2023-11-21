import Image from "next/image";
import React from "react";
import Button from "./Button";

interface CardProps {
  title: string;
  img: string;
  link: string;
}
const Card = ({ title, img, link }: CardProps) => {
  return (
    <>
      <div className="flex flex-wrap justify-center ">
          <div className="relative rounded-lg h-full group hover:">
            <Image src={img} alt={title} width={400} height={275} />

            <div className="absolute bottom-1 left-0 right-0 bg-[#000000CC]  p-4 text-white opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-opacity duration-300 ease-in-out">
              <h2 className="text-lg font-medium">{title}</h2>
              <a href="#" className="mt-3 text-blue-70 dark:text-white hover:font-bold inline-flex items-center">Learn More
                </a>
            </div>
        </div>
      </div>
    </>
  );
};

export default Card;
