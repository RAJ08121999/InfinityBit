interface User{
    readonly dbId:number,
    email:string,
    userId:number,
    googleId?:string
    // startTrail:()=> string//function declaration type1
    startTrail():string//function declaration type2
    getCoupon(couponName:string):number
}

const raj: User ={dbId:343,email:"hab@.com",userId:232,
    startTrail:()=>{
        return "trial done"
    },
    getCoupon:(name:"raj") => {
        return 10
    }
}

raj.email="raj@google.com"


// TypeScript interfaces define the structure of objects by specifying property types and method signatures, ensuring consistent shapes and enhancing code clarity.

export{}