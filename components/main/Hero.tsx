import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="container max-w-6xl mx-auto">
      <div className="md:mt-20 flex flex-col md:flex-row justify-around items-center">
        {/* LEFT */}

        <div className="flex flex-col">
          <h1 className="font-libre text-[40px]">
            Ekspert ochrony <br />i kształtowania{" "}
            <span className="">środowiska</span>
          </h1>

          <div className="mt-6">
            <div className="flex items-end space-x-3">
              <Image
                src="/A.jpeg"
                width={60}
                height={60}
                alt="Alina Maciejewska"
              />
              <div className="font-sans">
                <h1 className="text-[12px]">Prof. dr hab.</h1>
                <h1 className="uppercase text-[12px]">Alina Maciejewska</h1>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center space-x-6 font-sans">
            <Button className="rounded-none uppercase text-[9px] bg-[#444036] hover:bg-transparent hover:border-[1.5px] border-[#444036] hover:text-black py-6">
              Nawiąż współpracę <MoveRight size={12} className="ml-2" />
            </Button>
            <Button className="rounded-none uppercase text-[9px] bg-[#F9F6EB] border-[1.5px] border-[#444036] text-black tracking-wide py-6 hover:text-[#F9F6EB]">
              Więcej informacji <MoveRight size={12} className="ml-2" />
            </Button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden md:inline-block">
          <Image
            src="/Hero-group.png"
            width={400}
            height={400}
            alt="logo"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
