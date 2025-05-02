"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { LogIn, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const session = null;

  const navItems = [
    { label: "Profissionais", href: "#profissionais" },
  ];

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <Button
          key={item.label}
          className="bg-transparent hover:bg-transparent text-black shadow-none"
          asChild
          onClick={() => setIsOpen(false)}
        >
          <Link
            href={item.href}
            className="text-base"
          >
            {item.label}
          </Link>
        </Button>
      ))}

      {session ? (
        <Link
          href="/dashboard"
          className="flex items-center justify-center gap-2"
        >
          Acessar clínica
        </Link>
      ) : (
        <Button>
          <LogIn />

          Fazer login
        </Button>
      )}
    </>
  );

  return (
    <header className="fixed top-0 right-0 left-0 z-10 py-4 px-6 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-3xl font-bold text-zinc-900"
        >
          Odonto

          <span className="text-emerald-500">PRO</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-4">
          <NavLinks />
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger
            className="md:hidden"
            asChild
          >
            <Button
              className="text-black hover:bg-transparent hover:text-emerald-500"
              variant="ghost"
              size="icon"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[240px] sm:w-[300px] z-50"
          >
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>

              <SheetDescription>Veja nossos links</SheetDescription>

              <nav className="flex flex-col space-y-4 mt-6">
                <NavLinks />
              </nav>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}