import { useEffect, useState } from "react";
import axios from "axios";

/**
 * 
 * @param {String} type 
 * @returns Array
 */

export function useApiHandler(type) {
  const [customData, setCustomdata] = useState(null);
  const initial = "https://api.spacexdata.com/v3/";

  const final = initial + type.toLowerCase();

  useEffect(() => {
    axios.get(final).then((final) => {
      if (final.data) setCustomdata(final.data);
    });
  }, []);

  return customData;
}
