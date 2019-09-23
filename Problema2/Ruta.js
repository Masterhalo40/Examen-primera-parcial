export default class Ruta {
    constructor(ruta) {
       this._name = ruta.name;
       this._tiempoMinutos = ruta.tiempoMinutos;
       this._baseNombre = ruta.baseNombre;
       this._baseLongitud = ruta.baseLongitud;
       this._baseLatitud = ruta.baseLatitud;
    }
  
    get name() {
      return this._name;
    }
  
    get tiempoMinutos() {
      return this._tiempoMinutos;
    }

    get baseNombre() {
        return this._baseNombre;
    }

    get baseLongitud() {
        return this._baseLongitud;
    }

    get baseLatitud() {
        return this._baseLatitud;
    }
}
