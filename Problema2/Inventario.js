import Inventario from "./Inventario.js";

export default class Ruta {
    constructor(tableInventario) {
        this._tableInventario = tableInventario;
        this._rutas = [];
        this._salidas = [];
    }
    

      get camion() {
        return this._camion;
      }
  }

  