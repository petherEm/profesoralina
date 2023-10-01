import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="container max-w-6xl mx-auto mt-28 mb-28">
      <div className="flex flex-col gap-y-8 md:flex-row justify-around">
        {/* LEFT */}
        <div className="flex-[50%]">
          <div className="mt-6 w-2/3">
            <h1 className="font-libre text-left text-3xl font-semibold">
              Skontaktuj się <br className="hidden" />
              ze mną
            </h1>
            <p className="mt-8 font-sans text-[14px]">
              Serdecznie zapraszam do kontaktu wszystkich zainteresowanych
              ochroną i kształtowaniem środowiska.
            </p>
            <div className="flex flex-col">
              <p className="mt-8 font-libre font-semibold text-[14px]">
                Prof. dr hab. Alina Maciejewska
              </p>
              <p className="font-sans text-[11px]">Plac Politechniki 1,</p>
              <p className="font-sans text-[11px]">00-000 Warszawa, Polska</p>
            </div>
            <div className="flex flex-col">
              <p className="mt-8 font-libre font-semibold text-[14px]">
                Adres e-mail
              </p>
              <p className="font-sans text-[11px]">
                alina.maciejewska@pw.edu.pl
              </p>
            </div>

            <Button className="font-sans mt-8 rounded-none uppercase text-[9px] bg-[#F9F6EB] border-[1.5px] border-[#444036] text-black tracking-widest py-6 hover:text-[#F9F6EB]">
              Wyślij wiadomość <MoveRight size={12} className="ml-2" />
            </Button>
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex-[50%]">
          <Image
            src="/PW-photo.png"
            alt="Alina Maciejewska"
            width={350}
            height={350}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
