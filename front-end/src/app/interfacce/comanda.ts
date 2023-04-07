import { StatoComanda } from "./StatoComanda";
import { MenuElement } from "./menuElement";
import { Tavolo } from "./tavolo";

export interface Comanda{

  id?: string;
  stato: StatoComanda;
  tipo: string;

  //chiavi secondarie
  tavolo?: Tavolo;
  menuElements?: MenuElement[];

}
