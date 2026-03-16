import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

export function Pill({
  text,
  color = "#ffffff",
  textColor = "#ffffff",
  showStar = false,
  starColor = "#FFF200",
  maxWidth = "450px",
  className,
  style,
  ...props
}) {
  return (
    <span
      className={cn(
        " flex items-center text-center gap-3  rounded-full  px-12 py-6 text-base font-semibold text-balance md:text-2xl md:px-16 md:py-8",
        className,
      )}
      style={{
        backgroundColor: color,
        color: textColor,
        maxWidth: maxWidth,
        ...style,
        boxShadow: "0px 4px 0px 0px rgb(9 130 170 / 0.5)",
      }}
      {...props}
    >
      {showStar && (
        <Image
          src="/assets/Star_pink.svg"
          alt="Decorative star"
          width={28}
          height={28}
          style={{
            filter: starColor ? `drop-shadow(0 0 0 ${starColor})` : undefined,
          }}
          className="shrink-0"
        />
      )}
      {text}
    </span>
  );
}
