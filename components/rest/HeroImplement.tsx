import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const HeroProjects = () => {
  return (
    <section className="">
      <div className="relative h-full">
        <video
          autoPlay
          loop
          muted
          src="/projects/PR-video-2.mov"
          className="w-full object-contain bg-blend-hard-light"
        />

        <div className="absolute md:left-10 xl:left-[300px] inset-x-0  text-[#F9F6EB] sm:top-1/2">
          <h1 className="font-libre text-[40px]">
            Wdrozenia <br />i zgłoszenia patentowe
          </h1>
          <div className="mt-8 flex items-center space-x-6 font-sans">
            <Button className="rounded-none uppercase text-[9px] bg-[#F9F6EB] border-[1.5px] border-[#444036] text-black tracking-wide py-6 hover:text-[#F9F6EB]">
              Obszary badań <MoveRight size={12} className="ml-2" />
            </Button>

            <Button className="rounded-none uppercase text-[9px] bg-transparent border-[1.5px] border-[#F9F6EB] text-[#F9F6EB] tracking-wide py-6 hover:text-[#F9F6EB]">
              Zrealizowane projekty <MoveRight size={12} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroProjects;
