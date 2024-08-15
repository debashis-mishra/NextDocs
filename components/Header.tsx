import Link from "next/link";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="md:flex-1">
        <Image
          src="/assets/icons/logo.png"
          alt={"NextDocs Logo"}
          width={120}
          height={32}
          className="hidden md:block"
        />

        <Image
          src="/assets/icons/logo-icon.png"
          alt={"Logo"}
          width={100}
          height={100}
          className="mr-2 md:hidden"
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
