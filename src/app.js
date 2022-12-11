/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our", "you", "to", "main", "be"];
let adj = ["great", "big", "small", "ligh", "top", "bottom"];
let noun = ["jogger", "racoon", "windons", "glass", "door", "head", "heart"];

/*function principal(){
    let prono = Math.floor(Math.random()*5)+1;

    let ad = Math.floor(Math.random()*5)+1;

    let nou = Math.floor(Math.random()*6)+1;

    console.log(principal(pronoun[prono]+adj[ad]+noun[nou]+".com"))
}*/

window.onload = function principal() {
  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let b = 0; b < noun.length; b++) {
        console.log(pronoun[i] + adj[a] + noun[b] + ".com");
      }
    }
  }
};
