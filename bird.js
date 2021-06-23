class Bird{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,50,50,{restitution:0.5});
        this.width=50;
        this.height=50;
        World.add(world,this.body);
    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle)
        stroke("blue");
        strokeWeight(10);
        fill("white");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()
    }


}