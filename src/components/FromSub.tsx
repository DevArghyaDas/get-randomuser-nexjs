"use client";

import { Button, Input } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

const FromSub = () => {
  const [numVal, setNumVal] = useState<string>("");
  const router = useRouter();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (parseInt(numVal) > 0 && parseInt(numVal) <= 30) {
      router.push(`/users/${numVal}`);

      setNumVal("");
    } else {
      // console.log("value can't be greater than 30");
      if (parseInt(numVal) > 30) {
        toast.warning("value can't be greater than 30");
      }
      if (parseInt(numVal) < 1) {
        toast.warning("value can't be lesser than 1");
      }
    }
  };
  return (
    <>
      <form
        className="w-full max-w-xs flex items-center gap-3"
        onSubmit={onSubmit}>
        <Input
          isRequired
          errorMessage={"Please enter a number"}
          placeholder="Enter the number of user"
          type="number"
          value={numVal}
          onChange={(e) => setNumVal(e.target.value)}
        />
        <Button
          type="submit"
          variant="ghost"
          color="primary">
          {/* <PlusCircleIcon /> */}
          Get User
        </Button>
      </form>
    </>
  );
};

export default FromSub;
