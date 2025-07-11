"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { themes, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="shadow"
            color="primary"
            size="lg"
            isIconOnly>
            <SunIcon className="dark:hidden block" />
            <MoonIcon className="not-dark:hidden block" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Static Actions"
          selectionMode="single"
          selectedKeys="dark">
          {themes.map((val) => (
            <DropdownItem
              key={val}
              onPress={() => setTheme(val)}
              className="capitalize">
              {val}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default DarkModeButton;
