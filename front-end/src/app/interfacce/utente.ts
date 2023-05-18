import { Ristornate } from "./ristorante";
import { Ruolo } from "./Ruolo";

export interface Utente{

  id?: string;
  nome: string;
  cognome: string;
  ruolo: Ruolo;
  email: string;
  password: string;
  ristorante: string;
}
