class ShootBall{
    constructor(x, y,width,height,angle) {
        var options = {
          "density" :   1.5,
          "friction" : 1.0,
          "restitution" : 0.8,
          "frictionAir":0.06
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("assets/canonBall.png");
        World.add(world, this.body);
      }
    
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
    
        pop();
    
      }
    };





