"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const items = [
  {
    url: "https://imgur.com/fvpgyd4.png",
    name: "Adopt a Pet",
    description:
      "Adopt Happiness, Adopt Home: Embrace the journey of companionship. Adopt a pet, ignite an unbreakable bond, and fill your home with wagging tails and boundless love.",
    page: "/findpet/findanimal",
  },
  {
    url: "https://i.imgur.com/5TS3Gz6.png",
    name: "Mate for  Pet",
    description:
      "Looking for a new playmate for your beloved fur baby? Our community is a hub for pet lovers like you, With whom you can connect and accompany them ",
    page: "/findpet/findmate",
  },
];

const CarouselD = () => {
  return (
    <Carousel className="w-screen h-screen">
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-evenly m-4 p-4 ">
                  <img
                    src={item.url}
                    alt={item.name}
                    /* style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    height={900}
                    width={900}
                    quality={100} */
                    className=" h-36 w-36 object-cover rounded-2xl"
                  />
                  <h1>{item.description}</h1>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselD;
