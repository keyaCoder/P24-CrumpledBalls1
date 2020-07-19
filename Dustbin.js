class Dustbin{
    constructor(x, y){
        var options = {
            'isStatic':true
        }

        this.leftBody = Bodies.rectangle(x - 110, y - 40, 20, 100, options);
        this.rightBody = Bodies.rectangle(x + 110, y - 40, 20, 100, options);
        this.bottomBody = Bodies.rectangle(x - 90, y + 40, 200, 20, options);
    
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
        World.add(world, this.bottomBody);
    }

    display() {
        var posLeft = this.leftBody.position;
        var posRight = this.rightBody.position;
        var posBottom = this.bottomBody.position;
        push();
        fill('red');
        // rect(posLeft.x, posLeft.y, this.leftBody.width, this.leftBody.height);
        // rect(posRight.x, posRight.y, this.rightBody.width, this.rightBody.height);
        // rect(posBottom.x, posBottom.y, this.bottomBody.width, this.bottomBody.height);
        rect(posLeft.x, posLeft.y, 20, 100);
        rect(posRight.x, posRight.y, 20, 100);
        rect(posBottom.x, posBottom.y, 200, 20);
        pop();
    }
}