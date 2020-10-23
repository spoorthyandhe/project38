var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1,car2,car3,car4;
var form, player, game;
var cars;

function preload(){
  track=loadImage("track.jpg");
  //track2=loadImage("track.png");
  car1img=loadImage("car1.png");
  car2img=loadImage("car2.png");
  car3img=loadImage("car3.png");
  car4img=loadImage("car4.png");
  ground=loadImage("ground.png");

}

function setup(){
  canvas = createCanvas(1000,1000);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
game.End();
  }
}
