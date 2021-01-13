class Pig{

    constructor(x,y){
        var options={
            restitution:.8,
            density:1,
            friction:.3
        }
        this.body=Bodies.rectangle(x,y,60,60,options);
        this.width=60;
        this.height=60;

        World.add(myWorld, this.body)
    }

    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y,this.width,this.height);
        
    }

}