let id: number = 5;
let myName: string = "kongpop inyoo";
let isPublished: boolean = true;
let x: any = "heloo";

console.log("id:" + typeof(id) + " " + id)
console.log("myName:" + typeof(myName)+ " " + myName)
console.log("isPublished:" + typeof(isPublished)+ " " + isPublished)
console.log("x:" + typeof(x)+ " " + x)

let age: number = 25
console.log(`My name is ${myName}. I am ${age} years old.`)

let ids: number[];
ids = [1,2,3,4,5];

let arr: any[];
arr = [1, "2" , true, 3, 5 ]

let fan: string[];
fan = ["kongpop","kongpop1","kongpop2","kongpop3","kongpop4","kongpop5" ]

console.log(ids);
console.log(arr);
console.log(fan);

//ตัวแปลแบบ array ใน TS/JS
console.log("เพื่อนของฉัน");
fan.forEach(i => {
    console.log(`-:${i}`);
});
//
let salary : number[] = [1000,2000,5000,10000];
let commission: number[]=[];
salary.forEach((s) => {
    commission.push(s*0.1);
});
console.log(commission);
//
let Bonus: number[] = [];
salary.forEach((s)=>{
    if (s <= 1000){
        Bonus.push(s*2);
    }
    else if (s <= 5000){
        Bonus.push(s*1.5);
    }
    else if(s <= 10000){
        Bonus.push(s*1.2);
    }
    else {
        Bonus.push(s*1);
    }


})
console.log(Bonus);

//Tuple---> 1 record
let prod1: [number,string,string,number];
prod1 = [1,"Chocolate","Pack",100];

console.log(prod1[0]);

prod1.forEach((p)=>{
    console.log([p]);
});

let products : [number,string,string,number][];
products = [
    [1,"strawberry","pcs",20],
    [2,"Apple","pcs",25],
    [3,"Banana","pcs",10],
    [4,"Kiwi","pcs",30],
    [5,"Orange","pcs",25],

];
products.forEach(p=>{
    p[3] += 5;
    console.log(`${p[0]}. ${p[1]} ${p[2]} :${p[3]} `)
});
//
let students: [string,string,number,number,number][];

students = [
    ["1001", "kong", 20,50,0],
    ["1002", "Jakrit", 25,60,0],
    ["1003", "Chalermchai", 21,40,0],
    ["1004", "Wsok", 100,200,0],
    ["1005", "Thanakorn", 10,5,0]
];
//ให้update คะแนนรวม
students.forEach(s=>{
    s[4]=s[2]+s[3];
    console.log(`${s[0]}  ${s[1]}  Total ${s[4]}  `)
});

//
enum Direction1{
    Up,Down,Left,Right
}
enum Direction2{
    Up = "Up",
    Down= "Down",
    Left= "Left",
    Right= "Right"
}
console.clear
console.log(Direction1.Right);
console.log(Direction2);

//
enum pdf{
    A4=1,
    A5=2,
    A6=3,
    
} 
enum Orientation{
    Portrait = 1,
    Landscape = 2
}
console.log(pdf);

//
type Student = {
    id:  number,
    Name:  string,
    tel: string,
    lineID:string
}


let kong: Student = {
    id: 101,Name:"kong", tel:"080456444898"

}
console.log(kong.id);
//
let sid: number| string
sid = 101;
console.log(typeof(sid));

sid = "5655";
console.log(typeof(sid));

//function
function addNumber(x:number,y:number):number{
    return x+y;
}
console.log(addNumber(1,3));

function showlog(m:number | string):void{
    console.log(m);
}

showlog(123);
showlog("123");

//Interface func
//
interface MathFunc{
    ( x: number, y: number) : number
}
const addNum : MathFunc = (a: number, b: number) : number =>{return a+b};
const subNum : MathFunc = (x: number, y: number) : number => x-y ;
console.log(addNum(5,7));
console.log(subNum(5,7));

//
//Interface Class

interface Human{
    id:number,
    name:string,
    age:number,
    tel?:string
    move(): string,
    eat() : string
}

const student : Human={
    id:123,
    name: "konggg",
    age:30,
    tel:"0804564489",
    move: function() : string{
        return "Running";
    },
    eat:function() : string{
        return "Rice";
    },

}
//kong
const boxer :Human = {
    id:9,
    name:"NumSun",
    age: 45,
    tel:"0804564489",

    move: function() : string{
        return "Running";
    },
    eat:function() : string{
        return "Rice";
    },
}
console.log(boxer.move());

//
class Driver implements Human{
    id: number;
    name:string;
    age:number;
      constructor(id:number,name:string,age:number){
        this.id = id;
        this.name = name;
        this.age = age;
      }

      move(){
          return `${this.name}move by driver. `
      }

      eat(){
        return `${this.name}move by driver .`
    }



}

const d1  = new Driver(101,"kkkk",65);
console.log(d1.move())
console.log(d1.eat())