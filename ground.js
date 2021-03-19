class Ground{

    constructor(){

        //ground

            this.body = Bodies.rectangle(500,830,displayWidth,10,{isStatic: true});
            World.add(world, this.body);

    }

    display(){

        push ();

        rectMode(CENTER);
        fill("white");
        rect(700,875,displayWidth,100);

        pop ();

    }

}