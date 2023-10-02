import React from "react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const SpecScience = () => {
  return (
    <section className="bg-[#444036]">
      <div className="container flex justify-around p-20">
        <div className="w-1/3">
          <h1 className="font-libre text-left text-3xl text-[#F9F6EB] leading-relaxed w-1/3">
            Specjalność naukowa
          </h1>
        </div>
        <div className="mt-20 w-2/3">
          <p className="font-libre text-[14px] text-[#F9F6EB]">
            Inżynieria środowiska glebowego, gleboznawstwo, rekultywacja i
            zagospodarowanie obszarów zdegradowanych, rewitalizacja terenów
            zurbanizowanych, poprzemysłowych i powojskowych.
          </p>
          <p className="font-libre text-[14px] mt-10 text-[#F9F6EB]">
            Od roku 1985 prowadzi badania nad wykorzystaniem materii organicznej
            z węgla brunatnego, torfu, kompostów, osadów ściekowych, odpadów
            poprodukcyjnych do agromelioracji gleb piaszczystych oraz do
            rekultywacji gleb zdegradowanych i zanieczyszczonych chemicznie
            głównie metalami ciężkimi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecScience;
