import { UserData } from "@/lib/types";
import axios from "axios";

const getUserHook = async (baseUrl: string, numberOfUsers: string) => {
  try {
    if (parseInt(numberOfUsers) > 30 && parseInt(numberOfUsers) < 0) {
      return { mes: "The request is not valid", success: false, data: null };
    }
    if (parseInt(numberOfUsers) <= 30 && parseInt(numberOfUsers) > 0) {
      const { data } = await axios.get(baseUrl, {
        params: {
          results: numberOfUsers,
        },
      });

      if (data === null) {
        console.log("null data");
        return { mes: "The data is null", success: false, data: null };
      }

      const resData = data.results as UserData[];

      return { mes: "Successfully fetched!", success: true, data: resData };
    }
  } catch (
    error: any // eslint-disable-line
  ) {
    console.log(error);
    return { mes: `${error}`, success: false, data: null };
  }
};

export default getUserHook;
