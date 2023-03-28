import { MenuElement } from "./menuElement";
import { Tavolo } from "./tavolo";

export interface Comanda{

  id?: string;

  //chiavi secondarie
  tavolo?: Tavolo;
  menuElements?: MenuElement[];

}
