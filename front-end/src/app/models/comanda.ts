import { StatoComanda } from "./StatoComanda";
import { MenuElement } from "./menuElement";
import { Tavolo } from "./tavolo";

export interface Comanda{

  id?: string;
  tipo: string;
  statoElements: StatoComanda[];

  //chiavi secondarie
  tavolo?: Tavolo;
  menuElements?: MenuElement[];

}
