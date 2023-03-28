import { Ristornate } from "./ristorante";

export interface Tavolo{

  id?: string;
  numeroTavolo: number;
  numeroPersone: number;

  //chiavi secondarie
  ristorante?: Ristornate;
}
