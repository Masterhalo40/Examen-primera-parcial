import Ruta from "./Ruta.js";
import Inventario from "./Inventario.js";

class Main {
    constructor() {
        let ruta = new Ruta(
            document.querySelector("#inventario")
          );
      
          document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");

              let name = document.querySelector("#name").value;
              let tiempoMinutos = document.querySelector("#tiempoMinutos").value;
              let baseNombre = document.querySelector("#baseNombre").value;
              let baseLongitud = document.querySelector("#baseLongitud").value;
              let baseLatitud = document.querySelector("#baseLatitud").value;
      
              let objInventario = {
                name: name,
                tiempoMinutos: tiempoMinutos,
                baseNombre: baseNombre,
                baseLongitud: baseLongitud,
                baseLatitud: baseLatitud
              };
      
              let inventario = new Inventario(objInventario);
              ruta.addInventario(inventario);
          });
        }
    }

let m = new Main();