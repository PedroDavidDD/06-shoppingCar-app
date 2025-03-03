import React, { useEffect, useState } from "react";
import "./botRick.css";

export const BotRick = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [
    "/assets/img/speak/1.png",
    "/assets/img/speak/2.png",
    "/assets/img/speak/3.png",
    "/assets/img/speak/4.png",
    "/assets/img/speak/1.png",
  ];

  const rickisms = [
    "*Rick: ¿Listo para desperdiciar dinero en clones?*",
    "*Rick: Estos clones son tan inútiles como tú, pero al menos ellos tienen excusa, acaban de nacer.*",
    "*Rick: ¿Sabes lo que obtienes cuando compras un clon barato? Un problema caro, Morty.*",
    "*Rick: La única diferencia entre estos clones y tú es que ellos tienen garantía.*",
    "*Rick: Wubba lubba dub dub! ¡Compra un clon antes de que me arrepienta!*",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rickisms.length);
      setIsAnimating(true); // Activamos la animación cuando cambia el mensaje
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isAnimating) return;

    const wordCount = rickisms[currentIndex].split(" ").length; // Contamos las palabras
    const animationDuration = Math.min(wordCount * 200, 5000); // Tiempo total basado en palabras (máximo 5s)
    const frameRate = 200; // Cada frame dura 200ms
    const frameCount = Math.floor(animationDuration / frameRate); // Cuántos frames mostrar

    let frame = 0;
    const animationInterval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
      frame++;

      if (frame >= frameCount) {
        clearInterval(animationInterval);
        setImageIndex(4)
        setIsAnimating(false);
      }
    }, frameRate);

    return () => clearInterval(animationInterval);
  }, [isAnimating, currentIndex]);

  return (
    <div className="container-bot-rick">
      <div className="bot-rick">
        <h2>{rickisms[currentIndex]}</h2>
      </div>
      <div className="bot-rick-img">
        <img src={images[imageIndex]} alt="speak" />
      </div>
    </div>
  );
};
