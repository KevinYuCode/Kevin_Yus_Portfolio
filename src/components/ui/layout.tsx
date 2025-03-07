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
        "min-h-svh h-full flex flex-col px-6 md:px-20 md:py-10 py-8 z-10 w-[90vw] max-w-[2600px] mx-auto",
        className
      )}
      {...props}
    />
  </>
));
Layout.displayName = "Layout";

export { Layout };
