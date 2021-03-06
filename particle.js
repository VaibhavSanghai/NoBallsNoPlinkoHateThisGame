class Particle {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.4
        }
        this.radius = radius; 

        this.body = Bodies.circle(x, y, this.radius, options); 
        this.color = color(random(0, 255), random(0, 255), random(0, 255)); 
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
        fill(this.color); 
        ellipseMode(RADIUS); 
        ellipse(pos.x, pos.y, this.radius, this.radius); 
        pop(); 
    }
}