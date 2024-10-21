"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import LocalSwitcher from "@/app/_components/local-switcher";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Logo from "./Logo";



type NavbarItemType = {
  labe: string;
  link: string;
  clickCallback?: () => void;
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true);

  const t = useTranslations("Navbar");

  useEffect(() => {
    


    const theme = localStorage.getItem('theme');
		if (theme === 'dark') {
			setDarkTheme(true);
		} else {
			setDarkTheme(false);
		}
  }, []);

  useEffect(() => {

    if (darkTheme) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
  }, [darkTheme]);

 
  const toggleTheme = () =>
    setDarkTheme(!darkTheme)

  const items = [
    { label: t("home"), link: "/" },
    { label: t("freeMarketingAnalysis"), link: "/about" },
    { label: t("contactUs"), link: "/contact" },
  ];
 
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent ">
      <nav className="container flex h-20  border-2 items-center justify-between mt-3 gap-6 rounded-lg font-mono bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div>
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className="hidden md:flex md:items-center md:space-x-4 ">
          {/* <NavItems /> */}
          {items.map((item) => (
            <NavbarItem key={item.label} labe={item.label} link={item.link} />
          ))}
        </div>
        <div className="hidden md:flex gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hidden md:inline-flex"
          >
            {darkTheme ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <LocalSwitcher />
        </div>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-8 w-8" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[340px] sm:w-[400px] font-mono"
          >
            <div className="flex flex-col space-y-3 mt-4 ">
              {/* <NavItems /> */}
              {items.map((item) => (
                <NavbarItem
                  key={item.label}
                  labe={item.label}
                  link={item.link}
                />
              ))}
            </div>
            <div className="flex items-center justify-center md:hidden mt-4 gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="inline-flex  md:hidden"
              >
                {darkTheme ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
              <LocalSwitcher />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

function NavbarItem({ labe, link, clickCallback }: NavbarItemType) {
  const pathname = usePathname();
  const isActive = pathname === link;
  return (
    <div className="relative flex items-center ">
      <Link
        href={link}
        className={cn(
          buttonVariants({
            variant: "ghost",
          }),
          ` w-full justify-start text-md text-muted-foreground hover:text-foreground",
          ${isActive} && "text-foreground font-bold`
        )}
        onClick={() => {
          if (clickCallback) {
            clickCallback();
          }
        }}
      >
        {labe}
      </Link>
      {isActive && (
        <div className="absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block"></div>
      )}
    </div>
  );
}
