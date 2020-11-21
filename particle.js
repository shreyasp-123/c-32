class Particle{
    constructor(x, y, radius){
        this.body = Bodies.cirlce(x,y, radius, {isStatic: true})
        this.r = radius
        this.color = color(random(0, 255), random(0, 255), random(0, 255))
        World.add(world, this.body)
    }
    display(){
        pos = this.body.position
        ellipseMode(RADIUS)
        fill(this.color)
        ellipse(pos.x, pos.y, this.r, this.r)
    }
}