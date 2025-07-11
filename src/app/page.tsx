import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Home | RandomUser",
  };
};

const page = () => {
  return (
    <>
      <div className="h-[80lvh] grid place-items-center">
        <div className="text-2xl bg-gradient-to-br from-fuchsia-600 to-blue-600 bg-clip-text text-transparent from-20% p-3 text-center text-balance">
          Enter a number in the imput field above.
        </div>
      </div>
    </>
  );
};

export default page;
