import * as React from "react";

import { cn } from "@/lib/utils";

export function Pill({
  text,
  color = "#ffffff",
  textColor = "#ffffff",
  className,
  style,
  ...props
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-14 py-8 text-2xl font-semibold ",
        className,
      )}
      style={{
        backgroundColor: color,
        color: textColor,
        ...style,
        boxShadow: "0px 4px 0px 0px rgb(9 130 170 / 0.5)",
      }}
      {...props}
    >
      {text}
    </span>
  );
}
