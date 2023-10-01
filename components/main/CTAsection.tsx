import React from "react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const CTAsection = () => {
  return (
    <section className="bg-[#444036] ">
      <div className="max-w-6xl mx-auto flex flex-col p-10 items-center">
        <h1 className="text-3xl text-center md:w-2/3 text-[#F9F6EB] leading-relaxed">
          Realizuję <span className="italic">projekty badawcze </span>zlecone
          przez Ministerstwo Nauki, podmioty gospodarcze oraz jednostki
          samorządowe
        </h1>
        <div className="mt-8 flex items-center space-x-6 font-sans">
          <Button className="rounded-none uppercase text-[9px] bg-[#F9F6EB] border-[1.5px] border-[#444036] text-black tracking-widest py-6 hover:text-[#F9F6EB] hover:bg-[#444036] hover:border-[#F9F6EB]">
            Nawiąż Współpracę
            <MoveRight size={12} className="ml-2" />
          </Button>
          <Button className="rounded-none uppercase text-[9px] bg-[#444036] hover:bg-transparent border-[1.5px] border-[#F9F6EB] hover:text-black tracking-widest py-6 hover:bg-[#F9F6EB]">
            Więcej projektów
            <MoveRight size={12} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTAsection;
