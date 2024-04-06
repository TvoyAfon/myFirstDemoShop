import { useContext } from "react";
import { CardsContext } from "./CardsProvider";

export function useCards () {
 return useContext(CardsContext)
}
