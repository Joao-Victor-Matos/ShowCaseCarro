"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Encontre ou alugue um carro de uma maneira prática e simples!
        </h1>

        <p className="hero__subtitle">
          Agilize sua experiência de alugel com o nosso poderoso sistema de
          pesquisa.
        </p>

        <CustomButton
          title="Explorar carros"
          containerStyles="bg-primary-blue 
          text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
