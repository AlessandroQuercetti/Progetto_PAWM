import { Categoria } from "./Categoria";

export interface MenuElement{

  id?: string;
  nome: string;
  descrizione: string;
  prezzo: number;
  categoria: Categoria;
}
