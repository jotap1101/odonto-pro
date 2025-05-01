import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
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

        <nav className="hidden md:flex items-center">
          <a href="#">Profissionais</a>
        </nav>

        <Sheet>
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

              <SheetDescription>
                Veja nossos links
              </SheetDescription>

              <nav>
                <a href="#">Profissionais</a>
              </nav>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}