"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function Case() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [api, current]);

  // Unsplash tech/code related images
  const images = [
    "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=200&auto=format&fit=crop",
  ];

  return (
    <div className="w-full py-10 lg:py-20 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10">
          <h2 className="text-xl md:text-2xl tracking-tighter lg:max-w-xl font-regular text-left text-[#00ff41]/70">
            Tecnologías y Proyectos
          </h2>
          <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {Array.from({ length: 12 }).map((_, index) => (
                <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/6" key={index}>
                  <div className="flex rounded-lg overflow-hidden aspect-square bg-[#1a1a1a] border border-[#00ff41]/20 items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
                    <img 
                      src={images[index % images.length]} 
                      alt={`Tech ${index + 1}`} 
                      className="w-full h-full object-cover opacity-60 hover:opacity-100"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export { Case };
