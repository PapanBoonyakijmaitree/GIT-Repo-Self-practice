// 1) รวมชื่อสินค้าในตะกร้าเป็น string เดียว
// จาก carts ที่ให้ไว้ เขียนฟังก์ชันให้แสดงชื่อสินค้าเป็น string เดียว คั่นด้วย , 

const fuit = ["Apple", "Mango", "Banana"]
console.log(fuit.join(", "));

// 2) หาผลรวมเฉพาะเลขคู่
// จาก array nums = [1, 2, 3, 4, 5, 6] ให้หาผลรวมของ เลขคู่ เท่านั้น

const nums = [1, 2, 3, 4, 5, 6];
const Number = nums
  .filter(n => n % 2 === 0)        
  .reduce((sum, n) => sum + n, 0); 
console.log(Number);

//3) หาคนที่มี lastname ยาวที่สุดใน employees
const employees = [
  { id: "e1001", firstname: "Somchai", lastname: "Jaideemak" },
  { id: "e1002", firstname: "Mechai", lastname: "Deejaisudlor" },
  { id: "e1003", firstname: "Sudarad", lastname: "Rakdee" },
];

const longestLastname = employees.reduce((longest, current) => {
  if (current.lastname.length > longest.lastname.length) {
    return current; 
  } else {
    return longest; 
  }
}, employees[0]);

console.log(longestLastname);



// 4)หาสินค้าที่มีราคาสูงสุดใน carts 
// ผลลัพธ์คาดหวัง: { productId: 2005, price: 100, amount: 2 }
const carts = [
  { productId: 1002, price: 10, amount: 5 },
  { productId: 2005, price: 100, amount: 2 },
  { productId: 5001, price: 5, amount: 4 },
];

const Price = carts.reduce((max, product) => {
  return product.price > max.price ? product : max;
}, carts[0]);

console.log(Price);


//5) หาคำที่มีความยาวเกิน 5 ตัวอักษร
const words = ["apple","mango","strawberry","banana","kiwi"];
console.log(words.filter(word => word.length > 5));
