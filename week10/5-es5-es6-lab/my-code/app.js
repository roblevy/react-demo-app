/*eslint no-unused-vars: "error"*/

function player(name, position, appearances, goals) {
  this.name = Name
  this.position = Position
  this.appearances = Appearances
  this.goals = Goals
}

Player.prototype.scoredgoal = function() {
  return this.goals ++;
};

Player.prototype.talkToMedia = function() {
  return 'Hi my name is ' + this.name + ' and I have scored ' + this.goals + ' in ' + this.appearances + ' appearances';
};

Player.prototype.sendOff = function(player) {
  return player.name + ' the star ' + player.position + ' has been sent off!';
};

var ronaldo = new Player('Ronaldo', 'Striker', 100, 20)

var startingKeeper = ['Marcos'],
var startingDefence = ['Lúcio', 'Edmílson', 'Roque Júnior'],
var startingMidfield = ['Cafu', 'Gilberto Silva', 'Kléberson', 'Roberto Carlos', 'Ronaldinho'],
var startingStrikers = ['Rivaldo', 'Ronaldo'],

var fullTeam = [].concat(startingKeeper, startingDefence, startingMidfield, startingStrikers);

// you don't need to change the code below this line

ronaldo.scoredGoal();

console.assert(ronaldo.talkToMedia() === 'Hi my name is Ronaldo and I have scored 20 in 100 appearances');
console.assert(ronaldo.sendOff(ronaldo) === 'Ronaldo the star Striker has been a sent off!');
console.assert(fullTeam.length === 81);
