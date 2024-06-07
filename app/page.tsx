"use client";

import { Arrows } from "@/components/widgets/arrows";
import { SliderItem } from "@/components/widgets/slider-item";
import { SliderThumbnailItem } from "@/components/widgets/slider-thumbnail-item";
import { useState } from "react";

export default function Home() {

  const [itemActive, setItemActive] = useState<number>(1);
  const countItems = 5;

  const onPrev = () => {
    setItemActive(itemActive - 1)
    if(itemActive === 1) {
      setItemActive(countItems)
    }
  }

  const onNext = () => {
    setItemActive(itemActive + 1); 
    if(itemActive >= countItems){
      setItemActive(1)
    }
  }

  return <div className="h-screen relative">
    <ul>
      <SliderItem 
      itemActive={itemActive} 
      id={1} 
      image="/imgs/1.webp" 
      brand="Dodge "
      name="Challenger" 
      desc="El Doge Challenger es un potente muscle car con diseño clasico y altas prestaciones, destacando por su fuerza y estilo impactante."/>

      <SliderItem 
      itemActive={itemActive} 
      id={2} 
      image="/imgs/2.webp" 
      brand="Dodge "
      name="Camaro" 
      desc="El Doge Camaro es un icono muscle car con lineas agresivas, rendimiento poderoso y una estetica moderna que cautiva a los amantes de la velocidad."/>

      <SliderItem 
      itemActive={itemActive} 
      id={3} 
      image="/imgs/3.webp" 
      brand="Dodge "
      name="Charger" 
      desc="El Doge Charger es una sedan deportivo con diseño imponente, potente rendimiento y  caracteristicas de alto nivel, fusionado estilo y velocidad."/>

      <SliderItem 
      itemActive={itemActive} 
      id={4} 
      image="/imgs/4.webp" 
      brand="Jeep "
      name="Jeep" 
      desc="El Jeep Sinonimo de aventura todoterreno. Modelos como el Wragler y Grand Cherokee ofrecen robustez y estilo iconico en cada viaje."/>

      <SliderItem 
      itemActive={itemActive} 
      id={5} 
      image="/imgs/5.webp" 
      brand="Dodge "
      name="Ram" 
      desc="Lad Doge Ram es una robusta camioneta con poderoso rendimiento y  lujoso interior. Con un diseño imponente, es lider en fuerza y comodidad."/>
    </ul>
    <Arrows onClickPrev={() => onPrev()} onClickNext={() => onNext()}/>

    <ul className="absolute bottom-0 z-10 flex sm:justify-end gap-3 w-full h-[250px] px-14 overflow-y-hidden overflow-x-auto">
    <SliderThumbnailItem 
      itemActive={itemActive} 
      image="/imgs/1.webp" 
      id={1}
      name="Challenger" 
      onClick={() => setItemActive(1)}
      />
      <SliderThumbnailItem 
      itemActive={itemActive} 
      image="/imgs/2.webp" 
      id={2}
      name="Camaro" 
      onClick={() => setItemActive(2)}
      />
      <SliderThumbnailItem 
      itemActive={itemActive} 
      image="/imgs/3.webp" 
      id={3}
      name="Charger" 
      onClick={() => setItemActive(3)}
      />
      <SliderThumbnailItem 
      itemActive={itemActive} 
      image="/imgs/4.webp" 
      id={4}
      name="Jeep" 
      onClick={() => setItemActive(4)}
      />
      <SliderThumbnailItem 
      itemActive={itemActive} 
      image="/imgs/5.webp" 
      id={5}
      name="Ram" 
      onClick={() => setItemActive(5)}
      />
    </ul>
  </div>
}

