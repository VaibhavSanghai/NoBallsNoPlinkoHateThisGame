const Bodies = Matter.Bodies; 
const Engine = Matter.Engine; 
const World = Matter.World; 
const Body = Matter.Body; 

var world, engine; 

var divisionHeight = -200; 
var score = 0;

function setup() {
  createCanvas(480, 800);

  engine = Engine.create(); 
  world = engine.world; 

  plinkos = []; 
  particles = []; 
  divisions = []; 
  ground = new Ground(240, 750, 800, 25); 

  if (frameCount%60===0) {
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10)); 
  }
  
  for (var a = 40; a <= width; a = a + 50) {
    plinkos.push(new Plinko(a, 75, 5));
  }

  for (var b = 15; b <= width; b = b+ 50) {
    plinkos.push(new Plinko(b, 175, 5)); 
  }

  for (var e = 0; e <= width; e = e + 80) {
    divisions.push(new Division (e, height-divisionHeight/2, 10, divisionHeight)); 
  }
}

function draw() {
  Engine.update(engine); 
  background(0);  
  
  ground.display(); 

  for (var x = 40; x < plinkos.length; x++) {
    plinkos[x].display(); 
  }

  /*
  for (var y = 40; y < plinkos.length; y++) {
    plinkos[y].display(); 
  }

  for (var z = 40; z < plinkos.length; z++) {
    plinkos[z].display(); 
  }

  for (var m = 40; m < plinkos.length; m++) {
    plinkos[m].display(); 
  }
  */

  for (var c = 0; c < particles.length; c++) {
    particles[c].display(); 
  }

  for (var d = 0; d < divisions.length; d++) {
    divisions[d].display(); 
  }
}