class Box{
    constructor(x,y,width,height){
     var options ={
     isStatic:true
     }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        console.log("this.width1="+this.width)
        this.image = loadImage('dustbingreen.png');
        World.add(world,this.body);
    }
   display(){
    var pos =this.body.position;
   fill("white");
   strokeWeight(0);

   console.log("this.width="+this.width)
   rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
    image(this.image,240,77,100,115);
   }
}