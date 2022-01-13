// Orientação a Objetos

//Protótipos

/*
Todos os objetos Javascript herdam propriedade e métodos de um prototype. O objeto Object.prototype está no topo desta caddeia
*/

//Classes

/*
Syntatic sugar: uma sintaxe feita para facilitar a escrita.
*/

//old
var Meal = function(food) {
  this.food = food
}

Meal.prototype.eat = function() {
  return ':)'
}

//new

class Meal {
  construtor (food) {
    this.food = food
  }

  eat() {
    return ':)'
  }
}

/********************************* */

// Javascript não possui classes nativamente. Todas as classes são objetos e a herança se da por protótipos.
