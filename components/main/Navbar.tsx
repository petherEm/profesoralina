import Link from "next/link";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-[#F9F6EB] w-full z-50 font-sans">
      <div className="container max-w-6xl mx-auto flex items-center justify-between h-20 p-4">
        <div>
          <Image src="/amlogo.png" width={100} height={100} alt="logo" />
          {/* <div className="flex flex-col">
          <h1 className="text-[10px]">Prof. dr hab.</h1>
          <h1 className="text-xl font-semibold">Alina</h1>
          <h1 className="indent-4 text-xl font-semibold">Maciejewska</h1>
        </div> */}
        </div>
        <div>
          <ul className="hidden md:flex space-x-4 items-center uppercase text-[14px] font-light">
            <li>
              <Link href="/" className="hover:border-b-2 border-black">
                specjalizacje naukowe
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:border-b-2 border-black">
                projekty badawcze
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:border-b-2 border-black">
                o mnie
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:border-b-2 border-black">
                kontakt
              </Link>
            </li>
          </ul>
          <div>
            <Sheet>
              <SheetTrigger className="md:hidden">
                <Menu size={30} />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <Image
                      src="/amlogo.png"
                      width={100}
                      height={100}
                      alt="logo"
                    />
                  </SheetTitle>
                </SheetHeader>

                <div className="">
                  <ul className="mt-10 flex flex-col font-sans gap-y-6 uppercase text-[14px] font-light">
                    <li>
                      <Link href="/" className="hover:border-b-2 border-black">
                        specjalizacje naukowe
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="hover:border-b-2 border-black">
                        projekty badawcze
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="hover:border-b-2 border-black">
                        o mnie
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="hover:border-b-2 border-black">
                        kontakt
                      </Link>
                    </li>
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
