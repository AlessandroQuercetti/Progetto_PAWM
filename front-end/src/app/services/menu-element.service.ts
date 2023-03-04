import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuElementService {

  menuElements = [
    { id: 1, nome: 'carbonara', categoria: 'primo', descrizione: 'bcjbwjlncklqnc', prezzo: 10},
    { id: 2, nome: 'amatrciana', categoria: 'primo', descrizione: 'sfabsdfnhbsd', prezzo: 10},
    { id: 3, nome: 'margherita', categoria: 'pizza', descrizione: 'ei58loe7iu6sie', prezzo: 5},
    { id: 4, nome: 'piadina', categoria: 'piadina', descrizione: 'wAYEWJURSJU6', prezzo: 5},
    { id: 5, nome: 'bistecca', categoria: 'secondo', descrizione: 'urdyisrisi', prezzo: 15},
    { id: 6, nome: 'tiramisu', categoria: 'dolce', descrizione: 'eityjetki468oek', prezzo: 5},
    { id: 7, nome: 'sorbetto', categoria: 'dolce', descrizione: 'ei76oei6e', prezzo: 4}
  ]

  constructor() { }

  getElements(){
    return this.menuElements;
  }

  getElement(id: number){ //non so se serve
    return this.menuElements[id]; //TODO vedi bene questo perchè deve prendere la persona giusta
  }

  getElementsPerCategoria(){
    return this.menuElements; //TODO divisi per categorie
  }
}
