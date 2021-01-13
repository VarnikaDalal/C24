class Box {
    constructor(x, y, width, height) {
      var options = {
          restitution:0.8,
          density:1,
          friction:1
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(myWorld, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      //angleMode(DEGREES);
      angleMode(RADIANS);
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("green");
      strokeWeight(4);
      fill("black");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };