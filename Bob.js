class Bob {
    constructor(x, y){
        var options = {
            isStatic:false,
            restitution:1,
            density:1.0,
            friction:1
        }
        this.body = Bodies.circle(x, y, 35, options);

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        fill("red");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, 70);
    }
}