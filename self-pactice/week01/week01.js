//1.สร้างอาเรย์ colors = ["red", "green", "blue"] ,ใช้คำสั่งเพิ่ม "yellow"เข้าไปท้ายอาเรย์ ,ลบสมาชิกตัวแรกออก ,แสดงค่าของสมาชิกตัวสุดท้าย (โจทย์จาก AI)

const colors = ["red", "green", "blue"] 

colors.push("yellow");
console.log(colors);

colors.shift();
console.log(colors);

console.log(colors.pop());


//2.ให้สตริง str = "JavaScript" แปลงสตริงนี้เป็นอาเรย์ของตัวอักษร ,แสดงความยาวของอาเรย์ที่ได้ ,แสดงตัวอักษรตัวแรกและตัวสุดท้าย

const str = "JavaScript"
const arr = str.split("")

console.log(Array.isArray(arr));
console.log(arr);

console.log(arr.length);

console.log(arr[0], arr[arr.length - 1]);

//3.กำหนดอาเรย์ const arr = [100, 200, 300, 400, 500] 
// ใช้ destructuring เพื่อเก็บค่า 200 ไว้ในตัวแปร a ,เก็บค่าที่เหลือ (ยกเว้น 100 และ 200) ไว้ในอาเรย์ใหม่ชื่อ rest ,แสดงค่าของ a และ rest

const arr2 = [100, 200, 300, 400, 500] 
const [,a,...rest] = arr2

console.log(a,rest);

console.log(typeof a);  
console.log(Array.isArray(rest));

//4. กำหนดอ็อบเจกต์ const person = { name: "Alice", age: 25, city: "Bangkok" };
// ใช้ destructuring เพื่อเก็บค่า name และ city , แสดงข้อความ "Alice lives in Bangkok" โดยใช้ตัวแปรที่ destructure มา

const person = {name: "Alice", age: 25, city: "Bangkok" }
const {name, city} = person
console.log(`${name} lives in ${city}`);

//5. กำหนดอาเรย์ const fruits = ["apple", "banana", "cherry", "mango"];
// ใช้ destructuring เพื่อเก็บ "banana" ไว้ใน fav ,เก็บค่าที่เหลือไว้ในอาเรย์ใหม่ชื่อ others ,แสดงค่า fav และ others

const fruits = ["apple", "banana", "cherry", "mango"];
const [,fav,...others] = fruits
console.log(fav, others);
