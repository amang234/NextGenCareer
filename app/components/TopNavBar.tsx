"use client";

import { usePathname } from "next/navigation";
import { cx } from "../lib/cx";
import Link from "next/link";
import Image from "next/image";

export const TopNavBar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12",
        isHomePage && "bg-dot"
      )}
    >
      <div className="flex h-10 w-full items-center justify-between">
        <Link href="/">
          <div className="flex items-center justify-center gap-1">
            <h1 className="text-xl whitespace-nowrap font-bold text-primary">
              NextGenCareer
            </h1>
          </div>
        </Link>
        <nav
          aria-label="Site Nav Bar"
          className="flex items-center gap-2 text-sm font-medium"
        >
          {[
            //  ["", "Builder"],
            ["/resume-builder", "Builder"],
            ["", "ATS"],
            // ["https://smart-ats-checker-773qphkvsq2vzfmiucassh.streamlit.app/", "ATS"],
            
            // ["/resume-parser", "Parser"],
            ["", "Parser"],
          ].map(([href, text]) => (
            <Link
              key={text}
              className="rounded-md px-1.5 py-2 text-[#4345c2] hover:bg-[#87A2FF] focus-visible:bg-gray-100 lg:px-4"
              href={href}
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
