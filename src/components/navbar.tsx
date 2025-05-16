import Link from "next/link";
import React from "react";
import { navMenu } from "@/data/nav-menu";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="bg-[#1F212E] w-full p-6 flex items-center justify-between">
      <div>
        <Link href="/" className="text-2xl font-bold text-white">
          Istanbul
        </Link>
      </div>
      <div>
        <ul className="flex gap-6">
          {navMenu.map((item, index) => (
            <li className="text-neutral-100" key={index}>
              <Link
                className="hover:underline hover:underline-offset-4"
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;
