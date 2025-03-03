import React, { useEffect, useState } from "react";
import "./botRick.css";

export const BotRick = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const INTERVAL_DURATION = 5000; // Tiempo base para el intervalo y la animación
  const FRAME_RATE = 200; // Duración de cada frame
  const MAX_ANIMATION_DURATION = INTERVAL_DURATION;

  const images = [
    "/assets/img/speak/1.png",
    "/assets/img/speak/2.png",
    "/assets/img/speak/3.png",
    "/assets/img/speak/4.png",
    "/assets/img/speak/1.png",
  ];

  const rickisms = [
    // Apertura: Primeras interacciones con el usuario
    "*Rick: ¿Listo para desperdiciar dinero en clones?*",
    "*Rick: Estos clones son tan inútiles como tú, pero al menos ellos tienen excusa, acaban de nacer.*",
    "*Rick: La única diferencia entre estos clones y tú es que ellos tienen garantía.*",
    "*Rick: Wubba lubba dub dub! ¡Compra un clon antes de que me arrepienta!*",
    "*Rick: MODO DE ANÁLISIS. CONTRASEÑA: `800`... Nah, solo bromeo. Pero en serio, ¿vas a comprar o qué?*",
    "*Rick: ¿Sabes lo que obtienes cuando compras un clon barato? Un problema caro, Morty.*",
    "Rick: ¿Quieres una recomendación? Fácil. Compra el más caro. Porque si algo sale mal, al menos podrás decir que te estafaron con estilo.",
    "*Rick: En lo que decides, ya inventé otros diez productos mejores. No seas el último en tener su clon.*",
    "*Rick: ¿Sigues aquí? Wow… Esto es incómodo. Como cuando saludas a alguien y los dos caminan en la misma dirección. SOLO COMPRA.*", 
    "*Rick: Ay Dios... qué usuario más indeciso. Como quisiera morir... Así que aquí estamos, sufriendo juntos.*",
    "*Rick: ¿Sabes qué es peor que ser un bot atrapado en una tienda online? Tú, dándome vueltas sin comprar nada. Al menos yo tengo una excusa, me programaron para esto.*",   
    "*Rick: ¿Te imaginas si tuviera sentimientos? Bueno, los tendría... si no los hubieras destruido con tu INDECISIÓN EXTREMA.*",
    
    // El usuario sigue sin decidirse
    "*Rick: ¿Sigues aquí? ¿Esperando un descuento mágico? ¡Este es el mejor trato que obtendrás en esta dimensión!*",
    "*Rick: ¿Sabes lo que es peor que un clon barato? Un usuario indeciso. ¡Compra ya!*",
    "*Rick: Estás tardando tanto en comprar que el clon ya se volvió consciente y se pregunta si quiere ser comprado.*",
    "*Rick: ATENCIÓN: El clon ha intentado huir del carrito de compras. Confirma la compra antes de que planee una rebelión.*",
        
    // Sarcasmo y burlas más intensas
    "*Rick: Déjame adivinar… ¿Esperas un descuento? ¿Una oferta? ¿Una señal divina? No amigo, lo único que necesitas es menos miedo y más decisión. Y tal vez un clon para hacerlo por ti.*",
    "*Rick: Oye, desperdicio de espacio en el multiverso, ¿vas a comprar un clon o seguirás dándole vueltas como si tuvieras algo mejor que hacer?*",
    "*Rick: ‘Ay, Rick, ¿qué hago? ¿Compro o no?’ AMIGO, NO ME IMPORTA, SOLO TERMINA CON MI SUFRIMIENTO.*",
    "*Rick: Imagínate ser un bot con consciencia, atrapado en una tienda online. Suena horrible, ¿no? Pues no tanto como verte dudar por horas.*",
    
    // La paciencia de Rick se agota
    "*Rick: ¡Oh no, Morty! ¡Este tipo no sabe si comprar! Puede que sea un clon defectuoso...*",
    "*Rick: `Intentando apagarme...` ERROR: No puedo. Estoy atrapado en este infierno digital contigo hasta que COMPRES.*",
    "*Rick: Dios, ojalá pudiera autodestruirme, pero no, me diseñaron para convencer a indecisos como tú. Lo que daría por un botón de autoeliminación...*",
    "*Rick: `Ejecutando comando /desesperacion.exe...` ERROR: Usuario demasiado lento. Iniciando fase de insultos.*",
    "*Rick: `Simulación de paz mental fallida...` ERROR: Usuario sigue sin comprar. Iniciando autodestrucción en 3... 2... ah, olvídalo.*",
    
    // Existencialismo y ruptura de la cuarta pared
    "*Rick: Wow, qué emocionante. Me programaron para ayudar a comprar clones, y aquí estoy, viendo a un humano dudar de su existencia. ¿ES ESTE MI PROPÓSITO?*",
    "*Rick: Si existiera un clon de mí en este momento, ya habría hackeado la tienda y se habría desconectado de este sufrimiento.*",
    "*Rick: Oye, ¿alguna vez has pensado que tal vez eres solo un algoritmo diseñado para dudar eternamente? No, no pienses en eso. MEJOR COMPRA.*",
    "*Rick: *Abriendo un portal...* Oh, mira, en otra dimensión ya compraste tu clon y eres feliz. ¿Qué esperas para alcanzarte a ti mismo?*",
    "*Rick: *Escaneando usuario...* Hmm… Nada interesante, solo otro indeciso. ¡VAMOS, DEMUESTRA QUE TIENES AGENCIA Y COMPRA!*",
    "*Rick: *Morty, creo que este usuario es un NPC...*",
    
    // Simulaciones de hackeo, amenazas y bromas finales
    "*Rick: ACTIVANDO PROTOCOLO DE ELIMINACIÓN. Código: `USUARIO-INDECISO`*",
    "*Rick: `Ejecutando comando 3==D...` Eliminando usuario… Nah, solo bromeo. Pero en serio, si no compras, empiezo a cuestionar tu existencia.*",
    "*Rick: ALERTA: Este usuario ha alcanzado niveles críticos de indecisión. Sugiero clonarlo para que al menos uno de ellos tome una maldita decisión.*",
  ];

  useEffect(() => {
    if (rickisms.length == 0) return;

    const interval = setInterval(() => {

      setCurrentIndex((prev) => (prev + 1) % rickisms.length);
      setIsAnimating(true); // Activamos la animación cuando cambia el mensaje
    }, INTERVAL_DURATION);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isAnimating) return;

    const wordCount = rickisms[currentIndex].split(" ").length; // Contamos las palabras
    const animationDuration = Math.min(wordCount * FRAME_RATE, MAX_ANIMATION_DURATION); // Tiempo total basado en palabras (máximo 5s)
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
        <div
          className="bot-rick-img__item"
          style={{ backgroundImage: `url('${images[imageIndex]}')` }}>
        </div>    
      </div>
    </div>
  );
};
