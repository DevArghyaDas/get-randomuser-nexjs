"use client";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  useDisclosure,
} from "@heroui/react";
import { Menu } from "lucide-react";
import FromSub from "./FromSub";

const MobileDrawer = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        onPress={onOpen}
        isIconOnly
        variant="light">
        <Menu size={48} />
      </Button>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                Input Form
              </DrawerHeader>
              <DrawerBody>
                <div className="size-full flex justify-center items-center">
                  <FromSub />
                </div>
              </DrawerBody>
              <DrawerFooter>
                <Button
                  color="danger"
                  variant="ghost"
                  onPress={onClose}
                  fullWidth>
                  Close
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
