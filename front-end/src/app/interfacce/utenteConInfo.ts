import { Ruolo } from "./Ruolo";

export interface UtenteConInfo{

  id?: string;
  nome: string;
  cognome: string;
  ruolo: Ruolo;
  email: string;
  password: string;
}

