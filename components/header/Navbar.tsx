import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

import { Cart } from "../cart/Cart";

export default function Navbar() {
  return (
    <div className="w-full bg-background sticky top-0 left-0 z-50">
      <div className="flex items-center justify-between p-4 pb-0 max-w-[1850px] mx-auto">
        <div className="border rounded-full px-6 py-3 flex-shrink-0 bg-white">
          <Link href="/">
            <p className="text-xl font-bold whitespace-nowrap">Nayaak</p>
          </Link>
        </div>

        <div className="flex-grow mx-4">
          <div className="border rounded-full px-6 py-3 flex justify-center items-center bg-white max-w-3xl mx-auto">
            <nav className="flex gap-8 justify-center items-center w-full">
              <a
                href="#"
                className="text-lg capitalize font-semibold text-primary transition-colors"
              >
                Tool
              </a>
              <Link
                href="/"
                className="text-lg capitalize font-semibold hover:text-blue-600 transition-colors"
              >
                Doc
              </Link>
              <a
                href="#"
                className="text-lg capitalize font-semibold hover:text-blue-600 transition-colors"
              >
                About
              </a>
            </nav>
          </div>
        </div>

        <div className="flex-shrink-0 space-x-2 mr-3 md:block hidden">
          <Link href="/login">
            <Button variant="outline" className="px-5 rounded-full text-lg">
              login
            </Button>
          </Link>
          {/* <Button variant="outline" className="px-5 rounded-full text-lg">
            register
          </Button> */}
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </div>
  );
}
