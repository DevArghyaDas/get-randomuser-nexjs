"use client";

import { NodePropType } from "@/lib/types";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const HerouiProvider = ({ children }: NodePropType) => {
  return (
    <HeroUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={true}>
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
};

export default HerouiProvider;
