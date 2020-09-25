class Paper{
    
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.radius=radius;
        console.log("this.x" + x)
        this.body=Matter.Bodies.circle(x,y,this.radius,options);
       this.image=loadImage('paper.png');
      
      
       World.add(world,this.body);
      
    }
   display(){
       var pos=this.body.position;		

       push()
       translate(pos.x,pos.y);
       rectMode(CENTER)
     strokeWeight(0);
       fill(255)
       imageMode(CENTER);
    
       ellipse(-40,9,22)
       //image(this.image,90,178,35,35);
       image(this.image,-40,7,35,35) ;
       console.log("pos.x = " + pos.x);
       pop()
       
   }
}