abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string
    ){}

    abstract getSepia():void

    getReelTime():number{
        //after complex calculation
        return 30;
    }
}

//we can not create any object of an abstract class 
//it is totally the responsibility of the subclass to create objects of it

// const raj = new TakePhoto("test","test")

class Instagram extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode,filter)
    }

    getSepia():void{
        console.log("Sepia");
    }

}
const raj = new Instagram ("test", "test",3);