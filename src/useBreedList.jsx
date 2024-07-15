import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

/**
 * This is a custom hook to fetch the breeds of the animal passed
 */
export default function useBreedList(animal) {
 const results = useQuery(["breeds",animal],fetchBreedList);

  return [results?.data?.breeds??[], results.status];
}
