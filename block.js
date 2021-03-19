class Block{

    constructor(x,y){

        this.body = Bodies.rectangle(x, y, 75,75,{isStatic: false});
        World.add(world, this.body);

        this.image = loadImage("Companion Block.png");

    }

    display(){

        push ();

            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,175,175);

        pop ();

    }

}