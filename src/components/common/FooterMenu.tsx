"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationMenuItems = [
  {
    link: "/calculate",
    description: "Calculate",
  },
  {
    link: "/",
    description: "Home",
  },
  {
    link: "/calender",
    description: "Calender",
  },
];

const FooterMenu = () => {
  const requestPathname = usePathname();
  console.log(requestPathname);

  return (
    <NavigationMenu className="absolute bottom-0">
      <NavigationMenuList className="w-screen">
        {/* <div className=""> */}
        {navigationMenuItems.map((item, index) => (
          <NavigationMenuItem
            key={index}
            className="flex justify-center w-full"
          >
            <Link
              href={item.link}
              className={clsx(
                "w-full",
                navigationMenuTriggerStyle(),
                item.link === requestPathname && "bg-green-50"
              )}
            >
              {item.description}
            </Link>
          </NavigationMenuItem>
        ))}
        {/* </div> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default FooterMenu;
