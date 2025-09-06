// 1.นับจำนวนตัวอักษรที่ซ้ำกันใน string
// เขียนฟังก์ชัน getCharCount(str) ที่รับ string แล้วคืนค่าเป็น object ของจำนวนแต่ละตัวอักษร

function getCharCount(str) {
    let result = {};
    for (let char of str) {
        if (result[char]) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    return result;
}

console.log(getCharCount("banana")); 


// 2.ฟังก์ชันตรวจ palindrome
// เขียนฟังก์ชัน isPalindrome(str) ที่ตรวจว่าข้อความที่ส่งเข้ามาเป็น palindrome หรือไม่ (อ่านจากซ้ายไปขวาเหมือนกับขวาไปซ้าย)

function isPalindrome(str) {
    const text = str.toLowerCase();
    const reversed = text.split('').reverse().join('');
    return text === reversed;
}

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));
console.log(isPalindrome("aba"));

// 3.Higher-order function แปลง array
// เขียนฟังก์ชัน mapDouble(arr) ที่รับ array ของตัวเลข แล้ว return array ที่เลขแต่ละตัวคูณ 2 โดยใช้ higher-order function

function mapDouble(arr) {
    return arr.map(num => num * 2);
}

console.log(mapDouble([1, 2, 3, 4])); 
console.log(mapDouble([1, 33, 400,1000])); 


// 4.ฟังก์ชันรวมค่าเลขไม่จำกัด (Rest parameter)
// เขียนฟังก์ชัน multiplyAll(...nums) ที่คูณเลขทั้งหมดที่ส่งเข้ามา (ถ้าไม่ส่งเลขมาเลย ให้ return 1)

function multiplyAll(...nums) {
    return nums.reduce((acc, cur) => acc * cur, 1);
}

console.log(multiplyAll(2, 3, 4)); 
console.log(multiplyAll()); 
console.log(multiplyAll(20,20)); 

// 5.ฟังก์ชันที่รับ callback
// เขียนฟังก์ชัน calculate(a, b, operation) ที่รับตัวเลข 2 ตัว และรับ callback function (operation)

function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) { return x + y }
function sub(x, y) { return x - y }
function mul(x, y) { return x * y }
function div(x, y) { return y !== 0 ? x / y : "Error: divide by zero" }

console.log(calculate(5, 3, add));
console.log(calculate(5, 3, sub)); 
console.log(calculate(5, 3, mul));
console.log(calculate(5, 5, div));  
console.log(calculate(5, 0, div)); 

