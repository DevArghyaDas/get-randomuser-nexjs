"use client";
import { UserData } from "@/lib/types";
import { Card, CardBody, Image } from "@heroui/react";

const UserCard = ({ info }: { info: UserData }) => (
  <Card className="min-w-[300px] lg:min-w-full max-w-md shadow-lg border border-default-300">
    <CardBody>
      <div className="flex justify-center my-4">
        <Image
          alt="next-img"
          src={info.picture.large}
          height={150}
          width={150}
          className="rounded-full outline-[3px] outline-primary-500 outline-offset-2"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="text-2xl font-bold inline-flex gap-3">
          {info.name.first} {info.name.last}
        </div>
        <div className="capitalize">
          {info.gender}
          {info.gender === "male" ? "♂️" : info.gender === "female" ? "♀️" : ""}
        </div>
        <div className="">{info.email}</div>
        <div className="">{info.location.country}</div>
      </div>
    </CardBody>
  </Card>
);

export default UserCard;
