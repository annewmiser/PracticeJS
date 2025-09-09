let a = 5, b = 10;

console.log("ค่าเริ่มต้น = ", a);
console.log("แบบ Postfix = ", a++);
console.log("ค่าปัจจุบัน = ", a);
console.log(7 + 8 / 2 + 25);
console.log(9 + 8 / 2 + 25);

// การเขียน if else แบบลดรูป
let score = 40;
let pass = score > 50 ? "ผ่าน" : "ไม่ผ่าน";
console.log(pass)

// การเขียน if ซ้อน if
let age = 20;

if (age <= 15) {
    if (age == 15) {
        console.log("ม.3");
    } else if (age == 14) {
        console.log("ม.2");
    } else if (age == 13) {
        console.log("ม.1");
    } else {
        console.log("นักเรียบคนนี้อยู่ประถม")
    }
} else if (age >= 16 && age <= 18) {
    if (age == 16) {
        console.log("ม.4");
    } else if (age == 17) {
        console.log("ม.5");
    }
    else if (age == 18) {
        console.log("ม.6");
    }
} else {
    console.log("นักเรียนไม่ได้อยู่ระดับชั้นมัธยมและประถม");
}

// Switch_Case
// คำสั่ง break จำทำให้โปรแกรมกระโดดออกไปทำงานนอกคำสั่ง switch ถ้าไม่มี โปรแกรมจะทำคำสั่งต่อไปเรื่อยๆ จนจบการทำงาน
let day;

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break
    case 1:
        day = "Monday";
        break
    case 2:
        day = "Tuesday";
        break
    case 3:
        day = "Wedday";
        break
    case 4:
        day = "Thursday";
        break
    case 5:
        day = "Friday";
        break
    case 6:
        day = "Saturday";
        break
}
console.log(day)

