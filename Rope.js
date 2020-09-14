class Rope{
    constructor(body1, body2, offsetX, offsetY){
    
        var options={
            bodyA: body1,
            bodyB: body2,
            offsetX: offsetX,
            offsetY: offsetY,
        }

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        this.chain=Matter.Constraint.create(options);

        World.add(world ,this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        var Anchor1x = pointA.x;
        var Anchor1y = pointA.y;

        var Anchor2x = pointB.x+this.offsetX;
        var Anchor2y = pointB.y+this.offsetY;

        strokeWeight(3);

        line(Anchor1x, Anchor1y, Anchor2x, Anchor2y);
    }
}