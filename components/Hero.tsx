import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-1 py-10 lg:flex  lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            O seu blog sobre{" "}
            <strong className="font-extrabold text-yellow-300 sm:block">
              Petróleo e Energia.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-muted-foreground">
            As notícias mais relevantes do mundo de energia você encontra aqui!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
