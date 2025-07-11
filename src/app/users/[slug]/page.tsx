import UserCard from "@/components/UserCard";
import getUserHook from "@/hooks/getUserHook";
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

  const getData = await getUserHook(baseUrl, numberOfUsers);

  if (getData === undefined || getData.data === null) return null;

  const { data, success } = getData;

  if (success === true) {
    return (
      <>
        <div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5
        px-5">
          {data.map((info, index) => (
            <UserCard
              info={info}
              key={index}
            />
          ))}
        </div>
      </>
    );
  }
};

export default page;
