// 1.สร้างอ็อบเจกต์ car ที่มี property:
// 	•	brand = "Toyota"
// 	•	model = "Camry"
// 	•	method ชื่อ getFullName ที่คืนค่า "Toyota Camry"
//ให้ลองเรียก method และแสดงผลลัพธ์

const car = {brand:"Toyota", model:"Camry",
    getFullName(){
        return`${this.brand} ${this.model}`
    }
};
console.log(car.getFullName());

//2.สร้าง constructor function Animal ที่รับพารามิเตอร์ 2 ตัวคือ name และ type
//ให้สร้าง object ชื่อ dog จาก constructor โดยใส่ "Lucky" และ "Dog"

function Animal(name, type) {
    this.name = name
    this.type = type  
}
const dog = new Animal("Lucky","Dog");
console.log(dog);

//3.สร้าง class Student ที่มี property id และ name ให้มี method ชื่อ introduce() ที่คืนค่า "My name is <name>"
//สร้าง object std1 ที่ชื่อ "Beam" แล้วเรียกใช้ introduce()

class Student {
    constructor(id,name) {
        this.id = id
        this.name = name             
    }
    introduce(){
        return `My name is ${this.name}`
     }
}
const std1 = new Student(1,"Beam");
console.log(std1.introduce());

//4.สร้าง object ต้นแบบชื่อ Shape ที่มี method area() ซึ่งคืนค่า 0
//จากนั้นใช้ Object.create(Shape) สร้าง circle ที่มี property radius = 5 แล้วเขียน method area() ของ circle ให้คำนวณพื้นที่วงกลม

const Shape = {
    area() {
        return 0
    }
};

const circle = Object.create(Shape)
circle.radius = 5;
circle.area = function() {
    return Math.PI * Math.pow(this.radius, 2)
}

console.log(circle.area());


// 5 เปรียบเทียบ Object เขียนฟังก์ชัน isSameBook(book1, book2) ที่เปรียบเทียบว่า ถ้า ISBN เท่ากัน (case-insensitive)
//  ให้คืนค่า true ไม่งั้นคืนค่า false

function isSameBook(book1, book2) {
    if (book1.ISBN.toLowerCase() === book2.ISBN.toLowerCase()){
        return true
    }
    return false
}

// function isSameBook(book1, book2) {
//     return book1.ISBN.toLowerCase() === book2.ISBN.toLowerCase();
// }

const b1 = { title: "JS Guide", ISBN: "AbC123" }
const b2 = { title: "JavaScript Handbook", ISBN: "abc123" }
const b3 = { title: "Python Intro", ISBN: "PY999" }

console.log(isSameBook(b1, b2)); 
console.log(isSameBook(b1, b3)); 