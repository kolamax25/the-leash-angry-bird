class Leash{

    constructor(body1, body2){

        var options = {

            bodyA: body1,
            bodyB: body2,
            stiffness: 200,
            length: 20
        }

        this.leash = Constraint.create(options)
        World.add(world, this.leash)
    }

    display(){

        var pointA, pointB

        pointA = this.leash.bodyA.position
        pointB = this.leash.bodyB.position
        push();
        strokeWeight(5)
        line(pointA.x , pointA.y, pointB.x, pointB.y)
        pop();
    }


}