import { useEffect, useState } from "react";
import { serviceAllActivitys } from "services/activitys";

export function useListAllActivity() {
  const [isRequest, setIsRequest] = useState(false);

  useEffect(() => {
    console.log("chaam");
    async function getAllActivity() {
      setIsRequest(true);
      await serviceAllActivitys();
      setIsRequest(false);
    }
    getAllActivity();
  }, []);

  return {
    isRequest
  };
}
