class CrubledPaper{
    construct(x,y,radius){
        var options={
            restitution:1.5,
            isStatic:false,
        }
        this.body = Bodies.circle(width/2 , 200 , 5,options );
        World.add(world, this.body);
    }

    display(){
      //  var pos = packageBody.position;
        rectMode(CENTER);
        fill("purple");
       // rect(pos.x,pos.y,this.width,this.height);
    }

}