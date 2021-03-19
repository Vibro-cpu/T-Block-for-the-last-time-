class Ruler{

    constructor(y,height){

        this.body = Bodies.rectangle(1250, y, 42.5,height,{isStatic: true});
        World.add(world, this.body);

        this.height = height;

        this.image = loadImage("Crane.png");
    
    }

    display(){

        push ();

            
            imageMode(CENTER);
            image(this.image,1100,this.body.position.y,600,this.height);

        pop ();

    }

}