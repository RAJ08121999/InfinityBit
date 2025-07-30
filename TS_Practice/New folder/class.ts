// class User{
//     name:string;
//     readonly email:string;
//     age:number;

//     constructor(name:string,email:string,age:number){
//         this.name=name;
//         this.email=email;
//         this.age=age;
//     }
// }

//short notation of the above code with access modifiers public and private

class User{

    protected _courseCount=1

    readonly email :string = "raj@google.com"
    constructor(
        public name:string,
        age:number,
        private userId:number
    ){
    }

    //private method

    private deleteToken(){
        console.log("token deleted");
    }

    //defining getter
    get getAppleEmail():string{
        return `apple${this.email}`
    }

    get courseCount():number{
        return this._courseCount
    }

    //defining setter

    set courseCount(courseNum){//there should be no return type of a setter keep in mind
        if(courseNum<=1){
            throw new Error("course count should be more than 1")
        }
        this._courseCount=courseNum
    }
}


class subUser extends User{
    isFamily:boolean = true;
    changeCourseCount(){
        this._courseCount=4
    }
}
//object creation

const raj = new User("raj",20,123);



export{}


//prive access modifiers can only be accessible within the class
//protected can be accessible within the class and its inherited class
// public can be accessible anywhere 