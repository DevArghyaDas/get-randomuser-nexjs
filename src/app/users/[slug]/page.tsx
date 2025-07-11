import UserCard from "@/components/UserCard";
import { UserData } from "@/lib/types";
import axios from "axios";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Users | RandomUser",
  };
};

type Params = Promise<{ slug: string }>;

const page = async ({ params }: { params: Params }) => {
  const numberOfUsers: string = (await params).slug;

  const baseUrl = process.env.NEXT_PUBLIC_API_URL as string;

  if (parseInt(numberOfUsers) <= 30 && parseInt(numberOfUsers) > 0) {
    const { data } = await axios.get(baseUrl, {
      params: {
        results: numberOfUsers,
      },
    });

    if (data === null) {
      console.log("null data");
      return;
    }

    const resData = data.results as UserData[];

    return (
      <>
        <div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5
         px-5">
          {resData.map((info, index) => (
            <UserCard
              info={info}
              key={index}
            />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="h-[70lvh] grid place-items-center">
          <div className="text-3xl">You can&apos;t beat the Matrix 😎</div>
        </div>
      </>
    );
  }
};

export default page;
