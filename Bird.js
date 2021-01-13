class Bird {
    constructor(x, y) {
      var options = {
          restitution:0.5,
          density:1.5,
          friction:1
         
      }
      this.body = Bodies.rectangle(x, y, 50,50,options);
      this.width = 50;
      this.height = 50;
      
      World.add(myWorld, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      pos.x=mouseX;
      pos.y=mouseY;
      angleMode(DEGREES);
      angleMode(RADIANS);
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("green");
      strokeWeight(4);
      fill("green");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };