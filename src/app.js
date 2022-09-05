/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let quien = ["perro", "hermano", "sobrino", "pajaro"];
  let accion = ["se comió", "molesta", "juega", "corrio"];
  let que = [
    "antes de la clase",
    "justo a tiempo",
    "todo el tiempo",
    "durante mi almuerzo",
    "durante mi entrenamiento"
  ];

  let excuseP = document.querySelector("#excuse");
  excuseP.textContent =
    "Mi" +
    " " +
    quien[Math.floor(Math.random() * 4)] +
    " " +
    accion[Math.floor(Math.random() * 4)] +
    " " +
    que[Math.floor(Math.random() * 4)];

  console.log("Hello Rigo from the console!");
};
