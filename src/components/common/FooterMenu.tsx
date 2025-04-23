"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import clsx from "clsx";
import { Calculator, CalendarDays, House } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterMenu = () => {
  const requestPathname = usePathname();
  const iconStyle = "h-5 w-5 mb-1";

  const navigationMenuItems = [
    {
      link: "/calculate",
      description: "Calculate",
      icon: <Calculator className={iconStyle} />,
    },
    {
      link: "/",
      description: "Home",
      icon: <House className={iconStyle} />,
    },
    {
      link: "/calender",
      description: "Calender",
      icon: <CalendarDays className={iconStyle} />,
    },
  ];

  return (
    <NavigationMenu className="absolute bottom-0 border-t border-zinc-900">
      <div className="w-screen flex justify-center">
        <NavigationMenuList className="max-w-md w-screen mx-auto">
          {navigationMenuItems.map((item, index) => (
            <NavigationMenuItem
              key={index}
              className="flex justify-center w-full"
            >
              <Link
                href={item.link}
                className={clsx(
                  "w-full rounded-none text-emerald-600 active:bg-zinc-900  active:text-emerald-400 transition-all duration-300 text-center flex flex-col justify-center items-center p-1",
                  item.link === requestPathname && "bg-zinc-800"
                )}
              >
                {item.icon}
                <p className="text-xs uppercase tracking-wider font-extrabold">
                  {item.description}
                </p>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
};

export default FooterMenu;
