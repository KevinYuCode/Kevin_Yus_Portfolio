import { cn } from "@/lib/utils";
import React from "react";

const Layout = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <>
    <svg style={{ position: "absolute", width: 0, height: 0 }}>
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.6" /* Adjust this for more/less grain */
          numOctaves="6" /* Higher values add finer details */
          stitchTiles="stitch"
        />
        <feComponentTransfer>
          <feFuncA type="linear" slope=".4" />
        </feComponentTransfer>
      </filter>
    </svg>
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
