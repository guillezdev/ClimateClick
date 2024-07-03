import { useState } from "react";
import { WeatherDataInertface } from "../interfaces/serverInterfaces";
import { VITE_CLIMA_API_KEY, VITE_CLIMA_URL } from "./env.conts";

function useServerClima() {
  const [clima, setClima] = useState<WeatherDataInertface>();
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const getClima = async (city: string) => {
    setIsFetching(true);
    try {
      const response = await fetch(
        `${VITE_CLIMA_URL}?q=${city}&key=${VITE_CLIMA_API_KEY}`
      );
      if (response.ok) {
      }
      const request = await response.json();
      setClima(request);
    } catch (error) {
      console.log(error);
    } finally {
      setIsFetching(false);
    }
  };

  return {
    clima,
    getClima,
    isFetching,
  };
}

export default useServerClima;
