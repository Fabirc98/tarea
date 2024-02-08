'use strict'

class Refrigerador{
    constructor(comida, color, marca, precio, capacidad){
      this.comida = [comida];
      this.color = color;
      this.marca = marca;
      this.precio = precio;
      this.capacidad =capacidad;
    }
    
    agregarComida(nuevaComida){
      this.comida.push(nuevaComida);
    }
    showinfo(){
        alert(this.comida);
    }
  }
  let miRefrigerador = new Refrigerador("carne","blanco", "Indurama", "$500","250L");
miRefrigerador.agregarComida("manzanas");
miRefrigerador.agregarComida("leche");
miRefrigerador.showinfo()
