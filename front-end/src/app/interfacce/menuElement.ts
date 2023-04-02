import { Categoria } from "./Categoria";
import { Ristornate } from "./ristorante";

export interface MenuElement{

  id?: string;
  nome: string;
  descrizione: string;
  prezzo: number;
  categoria: Categoria;
}
