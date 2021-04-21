class Plinko {
    constructor(x, y, radius) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.circle(x, y, radius, options); 
        this.radius = radius; 
        World.add(world, this.body); 
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle; 

        push(); 
        translate(); 
        rotate(angle); 
        //imageMode(CENTER); 
        noStroke(); 
        fill("white"); 
        ellipseMode(RADIUS); 
        ellipse(pos.x, pos.y, this.radius, this.radius); 
        pop(); 
    }
}