import * as React from "react";
import { cn } from "@/lib/utils";
import { badgeVariants } from "./badge-variants";

export default function Badge({ className, variant, ...props }) {
  return (
    <span
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}