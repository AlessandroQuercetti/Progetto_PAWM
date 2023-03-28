import { Categoria } from "./Categoria";
import { Ristornate } from "./ristorante";

export interface MenuElement{

  id?: string;
  nome: string;
  descrizione: string;
  prezzo: number;
  allergeni: string;
  categoria: Categoria;

  //chiavi secondarie
  ristorante?: Ristornate;
}
