let id = 5;
let myName = "kongpop inyoo";
let isPublished = true;
let x = "heloo";
console.log("id:" + typeof (id) + " " + id);
console.log("myName:" + typeof (myName) + " " + myName);
console.log("isPublished:" + typeof (isPublished) + " " + isPublished);
console.log("x:" + typeof (x) + " " + x);
let age = 25;
console.log(`My name is ${myName}. I am ${age} years old.`);
let ids;
ids = [1, 2, 3, 4, 5];
let arr;
arr = [1, "2", true, 3, 5];
let fan;
fan = ["kongpop", "kongpop1", "kongpop2", "kongpop3", "kongpop4", "kongpop5"];
console.log(ids);
console.log(arr);
console.log(fan);
//ตัวแปลแบบ array ใน TS/JS
console.log("เพื่อนของฉัน");
fan.forEach(i => {
    console.log(`-:${i}`);
});
//
let salary = [1000, 2000, 5000, 10000];
let commission = [];
salary.forEach((s) => {
    commission.push(s * 0.1);
});
console.log(commission);
//
let Bonus = [];
salary.forEach((s) => {
    if (s <= 1000) {
        Bonus.push(s * 2);
    }
    else if (s <= 5000) {
        Bonus.push(s * 1.5);
    }
    else if (s <= 10000) {
        Bonus.push(s * 1.2);
    }
    else {
        Bonus.push(s * 1);
    }
});
console.log(Bonus);
//Tuple---> 1 record
let prod1;
prod1 = [1, "Chocolate", "Pack", 100];
console.log(prod1[0]);
prod1.forEach((p) => {
    console.log([p]);
});
let products;
products = [
    [1, "strawberry", "pcs", 20],
    [2, "Apple", "pcs", 25],
    [3, "Banana", "pcs", 10],
    [4, "Kiwi", "pcs", 30],
    [5, "Orange", "pcs", 25],
];
products.forEach(p => {
    p[3] += 5;
    console.log(`${p[0]}. ${p[1]} ${p[2]} :${p[3]} `);
});
//
let students;
students = [
    ["1001", "kong", 20, 50, 0],
    ["1002", "Jakrit", 25, 60, 0],
    ["1003", "Chalermchai", 21, 40, 0],
    ["1004", "Wsok", 100, 200, 0],
    ["1005", "Thanakorn", 10, 5, 0]
];
//ให้update คะแนนรวม
students.forEach(s => {
    s[4] = s[2] + s[3];
    console.log(`${s[0]}  ${s[1]}  Total ${s[4]}  `);
});
//
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.clear;
console.log(Direction1.Right);
console.log(Direction2);
//
var pdf;
(function (pdf) {
    pdf[pdf["A4"] = 1] = "A4";
    pdf[pdf["A5"] = 2] = "A5";
    pdf[pdf["A6"] = 3] = "A6";
})(pdf || (pdf = {}));
var Orientation;
(function (Orientation) {
    Orientation[Orientation["Portrait"] = 1] = "Portrait";
    Orientation[Orientation["Landscape"] = 2] = "Landscape";
})(Orientation || (Orientation = {}));
console.log(pdf);
let kong = {
    id: 101, Name: "kong", tel: "080456444898"
};
console.log(kong.id);
//
let sid;
sid = 101;
console.log(typeof (sid));
sid = "5655";
console.log(typeof (sid));
//function
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(1, 3));
function showlog(m) {
    console.log(m);
}
showlog(123);
showlog("123");
const addNum = (a, b) => { return a + b; };
const subNum = (x, y) => x - y;
console.log(addNum(5, 7));
console.log(subNum(5, 7));
const student = {
    id: 123,
    name: "konggg",
    age: 30,
    tel: "0804564489",
    move: function () {
        return "Running";
    },
    eat: function () {
        return "Rice";
    },
};
//kong
const boxer = {
    id: 9,
    name: "NumSun",
    age: 45,
    tel: "0804564489",
    move: function () {
        return "Running";
    },
    eat: function () {
        return "Rice";
    },
};
console.log(boxer.move());
//
class Driver {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    move() {
        return `${this.name}move by driver. `;
    }
    eat() {
        return `${this.name}move by driver .`;
    }
}
const d1 = new Driver(101, "kkkk", 65);
console.log(d1.move());
console.log(d1.eat());
