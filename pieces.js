class Pieces {
    constructor(x,y,r){
        var options = {
            isStatic: true,
            friction: 1000
            
        }
    this.body = Bodies.circle(x,y,22.5, options)
    this.r=22.5;

    World.add(world, this.body)
    
}
display(){
    var pos = this.body.position
    strokeWeight(4)
    stroke("red")
    fill("red")
    ellipseMode(CENTER)
    ellipse(pos.x, pos.y,22.5, 22.5)
}

}
