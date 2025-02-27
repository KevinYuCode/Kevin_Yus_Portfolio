import { cn } from "@/lib/utils";
import React from "react";

const Layout = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <>
    <span className="grainy-background" />
    <div
      ref={ref}
      className={cn(
        "min-h-svh h-full flex flex-col px-20 py-14 z-10",
        className
      )}
      {...props}
    />
  </>
));
Layout.displayName = "Layout";

export { Layout };
